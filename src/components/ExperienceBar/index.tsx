import { Container } from './style';

export function ExperienceBar() {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}></div>
        <span className="current-xp" style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </Container>
  );
}

// export default ExperienceBar;
