import { useEffect, useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { loadFirebase } from '../utils/firebase';
// import Link from 'next/link';

// import Prismic from 'prismic-javascript';
// import { Document } from 'prismic-javascript/types/documents';
// import PrismicDOM from 'prismic-dom';

// import { client } from '@/lib/prismic';

import {
  Container,
  Wrapper,
  InnerContainer,
  Section,
  ContainerLeft,
  ContainerRight,
} from '@/styles/pages/home';

import { ChallengeProvider } from '@/contexts/ChallengesContext';
import { CountdownProvider } from '@/contexts/CountdownContext';

import SEO from '@/components/SEO';
import { ExperienceBar } from '@/components/ExperienceBar';
import { Profile } from '@/components/Profile';
import { CompletedChallenges } from '@/components/CompletedChallenges';
import { Countdown } from '@/components/Countdown';
import { ChallengeBox } from '@/components/ChallengeBox';
import { Sidebar } from '@/components/Sidebar';

interface HomeProps2 {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface UserProps {
  name: string;
  email: string;
  image: string;
}

interface ProfileProps {
  user: UserProps;
  level: number;
  challenges: number;
  currentxp: number;
  totalxp: number;
}

export default function Home({ ...rest }) {
  const router = useRouter();
  const profiles = rest.pageProps.profiles;

  const saveProfile = useCallback(async (xpData) => {
    if (xpData.totalxp > 0) {
      const firebase = loadFirebase();
      const db = firebase.ref('profiles');
      db.get()
        .then((snapshot) => {
          const users = snapshot.val();
          for (const key in users) {
            if (users[key].user.email === xpData.user.email) {
              db.child(key).update(xpData);
            } else {
              router.push('/');
              console.log('Error updating profile');
            }
          }
        })
        .catch((error) => {
          console.log('Error getting user', error);
        });
    }
  }, []);

  function loadProfile() {
    const firebase = loadFirebase();
    const db = firebase.ref('profiles');

    let data: ProfileProps = {
      user: rest.session.user,
      level: 1,
      challenges: 0,
      currentxp: 0,
      totalxp: 0,
    };
    db.get()
      .then((snapshot) => {
        const profile = snapshot.val();
        if (!profile && data.user.email != '') {
          db.push(data); /// magic here
        }
      })
      .catch((error) => {
        console.log('Error loading profile', error);
      });
    for (const profile in profiles) {
      if (profiles[profile].user.email == '') {
        db.child(profile).remove();
      }

      if (profiles[profile].user.email === rest.session.user.email) {
        data = profiles[profile];
      } else if (rest.session.user.email) {
        db.push(data);
      } else {
        router.push('/');
      }
    }

    return data;
  }

  const user = loadProfile();

  return (
    <ChallengeProvider user={user} saveUser={saveProfile} {...rest}>
      <>
        <SEO
          title="Start 🚀"
          image="teste.jpg"
          // shouldExcludeTitleSuffix
        />
        <Wrapper>
          <Sidebar />

          <InnerContainer>
            <ExperienceBar />

            {/* provider */}
            <CountdownProvider>
              <Section>
                <ContainerLeft>
                  <Profile data={rest.session} />
                  <CompletedChallenges />
                  <Countdown />
                </ContainerLeft>
                <ContainerRight>
                  <ChallengeBox />
                </ContainerRight>
              </Section>
            </CountdownProvider>
          </InnerContainer>
        </Wrapper>
      </>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const firebase = loadFirebase();

  const result = await new Promise((resolve, reject) => {
    firebase
      .ref('profiles')
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((user) => {
          data.push(
            Object.assign(
              {
                key: user.key,
              },
              user.val()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([error]);
      });
  });
  return {
    props: { profiles: result },
  };
};
