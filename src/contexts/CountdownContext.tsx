import { createContext, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  percentToClose: number;
}

// interface CountdownProviderProps {
//   children: ReactNode;
//   stealing: boolean;
// }

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children, stealing }): JSX.Element {
  let timer = 25;

  stealing && (timer = 0.05);

  const { startNewChallenge, resetChallenge } = useContext(ChallengesContext);

  const challengeTime = timer * 60;

  const [time, setTime] = useState(challengeTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);
  const [percentToClose, setPercentToClose] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown(): void {
    setIsActive(true);
    setTime(challengeTime);
    setPercentToClose(100 - (time / challengeTime) * 100);
  }

  function resetCountdown(): void {
    clearTimeout(countdownTimeout);
    resetChallenge();
    setPercentToClose(0);
    setIsActive(false);
    setHasFinished(false);
    setTime(challengeTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      const countdownTimeout = setTimeout(() => {
        setTime(time - 1);
        setPercentToClose(100 - (time / challengeTime) * 100);
      }, 1000);
    } else if (isActive && time === 0) {
      startNewChallenge();
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
        percentToClose,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
