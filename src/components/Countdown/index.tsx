import { useContext } from 'react';
import { CountdownContext } from '@/contexts/CountdownContext';
import { Container } from './styles';

export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container isActive={isActive}>
      <div className="clock">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled>
          Cycle ended <img src="icons/check-circle.svg" alt="icon check" />
        </button>
      ) : isActive ? (
        <button type="button" onClick={resetCountdown}>
          Leave the cycle
          <img src="icons/close.svg" alt="icon close" />
        </button>
      ) : (
        <button type="button" onClick={startCountdown}>
          Start a cycle
          <img src="icons/play-arrow.svg" alt="icon play" />
        </button>
      )}
    </Container>
  );
}
