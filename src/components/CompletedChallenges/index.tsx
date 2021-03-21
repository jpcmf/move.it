import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useContext } from 'react';
import { Container } from './styles';
import { BiTrophy } from 'react-icons/bi';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>
        <BiTrophy size="24" />
        Complete challenges
      </span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
