import { useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengesContext';
import { Container } from './style';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/jpcmf.png" alt="avatar" />
      <div>
        <strong>João Paulo Fricks</strong>
        <p>
          <img src="icons/level.svg" alt="icon" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
