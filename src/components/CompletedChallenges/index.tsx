import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useContext } from 'react';
import { Container } from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Complete challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
