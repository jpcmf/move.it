import { Container } from './styles';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <div className="active">
          <header>Win 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="icon body" />
            <strong>New challenge</strong>
            <p>Lorem Lorem Lorem</p>
          </main>
          <footer>
            <button type="button" className="btn-failed">
              I failed
            </button>
            <button type="button" className="btn-completed">
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
