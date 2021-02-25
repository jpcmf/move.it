import { useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengesContext';
import { Container } from './styles';
import { CountdownContext } from '@/contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailded() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <div className="active">
          <header>Win {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="icon body" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className="btn-failed"
              onClick={handleChallengeFailded}
            >
              I failed
            </button>
            <button
              type="button"
              className="btn-completed"
              onClick={handleChallengeSucceeded}
            >
              I completed
            </button>
          </footer>
        </div>
      ) : (
        <div className="not-active">
          <strong>End a cycle to receive a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="icon level up" />
            Level up by completing challenges.
          </p>
        </div>
      )}
    </Container>
  );
}
