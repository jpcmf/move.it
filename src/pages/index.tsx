import { useEffect, useState, useCallback, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { loadFirebase } from '../utils/firebase';
import { Toaster } from 'react-hot-toast';
import { getSession, useSession } from 'next-auth/client';
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

// interface HomeProps2 {
//   level: number;
//   currentExperience: number;
//   challengesCompleted: number;
// }

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

export default function Home({ ...pageProps }) {
  const [session, loading] = useSession();
  const router = useRouter();
  const profiles = pageProps.pageProps.profiles;
  const userSession = pageProps.pageProps.session;

  const notifyEmail = () => {
    console.log('toast');
  };

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    } else {
      router.push('/');
    }
  }, [session, loading]);

  const loadUser = useMemo(() => {
    if (userSession) {
      !userSession.user.email && notifyEmail();
      const emptyUser = {
        user: userSession.user,
        level: 1,
        challenges: 0,
        currentxp: 0,
        totalxp: 0,
      };
      loadFirebase()
        .ref('profiles')
        .get()
        .then((snapshot) => {
          const users = [];

          snapshot.forEach((user) => {
            users.push(
              Object.assign(
                {
                  key: user.key,
                },
                user.val()
              )
            );
          });

          const filterUser = users.filter(
            (data: ProfileProps) => data.user.email === userSession.user.email
          );

          filterUser.length > 1 &&
            loadFirebase().ref('profiles').child(filterUser[1].remove());
        });

      profiles.length < 1 && loadFirebase().ref('profiles').push(emptyUser);

      const filterUser = profiles.filter(
        (data: ProfileProps) => data.user.email === userSession.user.email
      );

      filterUser.length > 1 &&
        loadFirebase().ref('profiles').child(filterUser[1]).remove();

      const findUser = filterUser.find(
        (data: ProfileProps) => data.user.email === userSession.user.email
      );

      if (!findUser) {
        loadFirebase().ref('profiles').push(emptyUser);
        console.log('User created', userSession.user.email);
        return emptyUser;
      } else {
        return findUser;
      }
    }
  }, [userSession]);

  const updateProfile = useCallback(async (xpData) => {
    if (xpData.totalxp > 0) {
      xpData.user.email === loadUser.user.email &&
        loadFirebase().ref('profiles').child(loadUser.key).update(xpData);
    }
  }, []);

  if (typeof window !== 'undefined' && loading) {
    return (
      <div className="loading">
        <span className="c-loader"></span>
      </div>
    );
  }

  // const saveProfile = useCallback(async (xpdata) => {
  //   if (xpData.totalxp > 0) {
  //     const firebase = loadFirebase();
  //     const db = firebase.ref('profiles');
  //     db.get()
  //       .then((snapshot) => {
  //         const users = snapshot.val();
  //         for (const key in users) {
  //           if (users[key].user.email === xpData.user.email) {
  //             db.child(key).update(xpData);
  //           } else if (!xpData.user.email) {
  //             xpData.user && db.push(xpData);
  //           } else {
  //             router.push('/login');
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         console.log('Error getting user', error);
  //       });
  //   }
  // }, []);

  // function loadProfile() {
  //   const firebase = loadFirebase();
  //   const db = firebase.ref('profiles');

  //   let userData: ProfileProps = {
  //     user: rest.session.user,
  //     level: 1,
  //     challenges: 0,
  //     currentxp: 0,
  //     totalxp: 0,
  //   };

  //   db.get()
  //     .then((snapshot) => {
  //       const profile = snapshot.val();
  //       if (!profile && userData.user.email != '') {
  //         db.push(userData);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error loading profile', error);
  //     });

  //   for (const profile in profiles) {
  //     if (profiles[profile].user.email == '') {
  //       db.child(profile).remove();
  //     }
  //     if (profiles[profile].user.email === rest.session.user.email) {
  //       userData = profiles[profile];
  //     } else if (rest.session.user.email && !profiles[profile].user.email) {
  //       db.push(userData);
  //     }
  //   }

  //   return userData;
  // }

  // const userLoaded = loadProfile();

  if (session) {
    return (
      <ChallengeProvider
        user={loadUser}
        updateUser={updateProfile}
        {...pageProps}
      >
        <>
          <SEO
            title="Start 🚀"
            image="teste.jpg"
            // shouldExcludeTitleSuffix
          />
          <Wrapper>
            <Toaster />
            <Sidebar />

            <InnerContainer>
              <ExperienceBar />

              {/* provider */}
              <CountdownProvider user={loadUser}>
                <Section>
                  <ContainerLeft>
                    <Profile data={loadUser} />
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

  return (
    <div className="loading">
      <span className="c-loader"></span>
    </div>
  );
}

export async function getServerSideProps(context): Promise<any> {
  const session = await getSession(context);
  const firebase = loadFirebase();

  const profiles = await new Promise((resolve, reject) => {
    firebase
      .ref('profiles')
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((user) => {
          if (!user.val().user.email || user.val().user.email === '') {
            firebase.ref('profiles').child(user.key).remove();
          }
          data.push(
            Object.assign(
              {
                key: user.key,
              },
              user.val()
            )
          );
        });
        data.filter((user, idx): void => {
          const nextUser = data[idx + 1];
          if (nextUser) {
            if (user.user.email === nextUser.user.email) {
              loadFirebase().ref('profiles').child(nextUser.key).remove();
            }
          }
        });
        resolve(data);
      })
      .catch((error) => {
        reject([error]);
      });
  });
  return {
    props: { profiles, session },
  };
}
