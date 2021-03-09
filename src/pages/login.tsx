import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import SEO from '@/components/SEO';

import { Container, InnerContainer } from '@/styles/pages/login';

const Login: React.FC<AppProps> = ({ ...pageProps }) => {
  const userSession = pageProps.pageProps.session;

  const [loading] = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!(pageProps.session || loading)) {
      router.push('/login');
    } else {
      router.push('/');
    }
  }, [userSession, loading]);

  return (
    <Container>
      <SEO title="Sign in" image="login.jpg" />

      <InnerContainer>
        <img src="logo-full--white.svg" alt="move.it" />
        <strong>Welcome</strong>
        <div>
          <img src="logo-github.svg" alt="Github" />
          <p>Log in with your Github to start</p>
        </div>
        <button type="button" onClick={() => signIn('github')}>
          <img src="/icons/arrow-right.svg" alt="icon arrow" />
        </button>
        {/* TODO: ... */}
        {/* <small>
          O <strong>move.it</strong> é uma aplicação com base na técnica
          Pomodoro, destinada a desenvolvedores para auxiliar no cuidado da sua
          saúde e postura.
        </small> */}
      </InnerContainer>
    </Container>
  );
};

export default Login;
