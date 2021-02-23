import { Container } from './style';

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/jpcmf.png" alt="avatar" />
      <div>
        <strong>João Paulo Fricks</strong>
        <p>
          <img src="icons/level.svg" alt="icon" />
          Level 1
        </p>
      </div>
    </Container>
  );
}
