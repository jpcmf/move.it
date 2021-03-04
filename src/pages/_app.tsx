import React from 'react';
import GlobalStyle from '@/styles/global';
import Login from './login';
import { useSession } from 'next-auth/client';

export default function MyApp({ Component, ...pageProps }) {
  const [session] = useSession();

  return (
    <>
      <GlobalStyle />
      {!session ? (
        <Login {...pageProps} />
      ) : (
        <Component {...pageProps} session={session} />
      )}
    </>
  );
}
