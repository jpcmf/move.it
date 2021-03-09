import React from 'react';
import GlobalStyle from '@/styles/global';
import { Provider } from 'next-auth/client';

export default function MyApp({ Component, ...pageProps }) {
  const sessionApp = pageProps.session;

  return (
    <Provider
      session={sessionApp}
      options={{
        clientMaxAge: 60 * 60,
        keepAlive: 120 * 60,
      }}
    >
      <GlobalStyle />
      {<Component {...pageProps} />}
    </Provider>
  );

  // if (typeof window !== 'undefined' && loading) {
  //   return (
  //     <>
  //       <GlobalStyle />
  //       <div className="loading">
  //         <span className="c-loader"></span>
  //       </div>
  //     </>
  //   );
  // }

  // if (session) {
  //   return (
  //     <>
  //       <GlobalStyle />
  //       {<Component {...pageProps} session={session} />}
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     <GlobalStyle />
  //     {<Login {...pageProps} />}
  //   </>
  // );
}

// export async function getServerSideProps({ context }) {
//   const session = await getSession(context);

//   return {
//     props: { session },
//   };
// }
