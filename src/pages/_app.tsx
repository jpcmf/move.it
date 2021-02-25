import GlobalStyle from '@/styles/global';

import { ChallengeProvider } from '../contexts/ChallengesContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChallengeProvider>
  );
}
