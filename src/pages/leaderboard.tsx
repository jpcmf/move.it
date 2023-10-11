import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { loadFirebase } from '../utils/firebase';

import { Wrapper, InnerContainer, Section } from '@/styles/pages/leaderboard';

import { Sidebar } from '@/components/Sidebar';
import { Score } from '@/components/Score';

export default function Leaderboard({ toggleTheme, ...rest }) {
  const router = useRouter();
  const [session, loading] = useSession();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [initialUsers] = useState(rest.pageProps.profiles);

  const refreshData = (): void => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [initialUsers]);

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    } else {
      router.push('leaderboard');
    }
  }, [session, loading]);

  return (
    <Wrapper>
      <Sidebar toggleTheme={rest.toggleTheme} />

      <InnerContainer>
        <header>
          <h2>Leaderboard</h2>
        </header>

        <Section>
          <header>
            <p>Position</p>
            <p>User</p>
            <p>Challenge</p>
            <p>Experience</p>
          </header>
          <Score profiles={rest.pageProps.profiles} />
        </Section>
      </InnerContainer>
    </Wrapper>
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
