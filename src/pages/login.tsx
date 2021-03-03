import React from 'react';
import { signIn } from 'next-auth/client';

import SEO from '@/components/SEO';

import { Container, InnerContainer } from '@/styles/pages/login';

export default function Login() {
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
      </InnerContainer>
    </Container>
  );
}
