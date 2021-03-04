import { GetServerSideProps } from 'next';
import { loadFirebase } from '../utils/firebase';

import {
  Container,
  Wrapper,
  InnerContainer,
  Section,
} from '@/styles/pages/home';

import { Sidebar } from '@/components/Sidebar';
import { Score } from '@/components/Score';

export default function Leaderboard({ ...rest }) {
  return (
    <Wrapper>
      <Sidebar />

      <InnerContainer>
        <header>
          <h2>Leaderboard</h2>
        </header>

        <Score profiles={rest.pageProps.profiles} />
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
