import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useContext } from 'react';
import { Container, Overlay } from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <div>
          <span>{level}</span>
          <strong>Congratulations</strong>
          <p>You have reached a new level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="icons/close.svg" alt="icon close" />
          </button>
        </div>
      </Container>
    </Overlay>
  );
}
