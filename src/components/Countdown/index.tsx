import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengesContext';
import { Container } from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
