// import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
// import Link from 'next/link';

// import Prismic from 'prismic-javascript';
// import { Document } from 'prismic-javascript/types/documents';
// import PrismicDOM from 'prismic-dom';

// import { client } from '@/lib/prismic';

import { ChallengeProvider } from '@/contexts/ChallengesContext';
import { CountdownProvider } from '@/contexts/CountdownContext';

import {
  Container,
  Section,
  ContainerLeft,
  ContainerRight,
} from '@/styles/pages/home';

import SEO from '@/components/SEO';
import { ExperienceBar } from '@/components/ExperienceBar';
import { Profile } from '@/components/Profile';
import { CompletedChallenges } from '@/components/CompletedChallenges';
import { Countdown } from '@/components/Countdown';
import { ChallengeBox } from '@/components/ChallengeBox';
interface HomeProps2 {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps2) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <SEO
          title="Start 🚀"
          image="teste.jpg"
          // shouldExcludeTitleSuffix
        />

        <ExperienceBar />

        {/* provider */}
        <CountdownProvider>
          <Section>
            <ContainerLeft>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </ContainerLeft>
            <ContainerRight>
              <ChallengeBox />
            </ContainerRight>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
