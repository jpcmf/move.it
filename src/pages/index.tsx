import { useEffect, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { loadFirebase } from '../utils/firebase';
import { Toaster } from 'react-hot-toast';
import { getSession, useSession } from 'next-auth/client';

import {
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
import usePersistedState from '@/utils/usePersistedState';

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
  const [stealing, setStealing] = usePersistedState('stealing', false);
  const [session, loading] = useSession();
  const router = useRouter();
  const profiles = pageProps.pageProps.profiles;
  const userSession = pageProps.pageProps.session;

  // TODO: Notify user about e-mail
  const notifyEmail = () => {
    console.log('toast');
  };
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = (): void => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [profiles]);

  useEffect(() => {
    pageProps.router.query.stealing === 'true'
      ? setStealing(true)
      : setStealing(false);
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
            image="fb.jpg"
            // shouldExcludeTitleSuffix
          />
          <Wrapper>
            <Toaster />
            <Sidebar toggleTheme={pageProps.toggleTheme} />

            <InnerContainer>
              <ExperienceBar />

              {/* provider */}
              <CountdownProvider stealing={stealing}>
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
