import challenges from '../../challenges.json';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
// import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

import { LevelUpModal } from '@/components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  profileData: ProfileProps;
  totalExperience: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
  dataUser: ProfileProps;
}

interface UserProps {
  name: string;
  email: string;
  image: string;
}

interface ProfileProps {
  user: UserProps;
  level: number;
  challenges: number;
  currentxp: number;
  totalxp: number;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children, ...rest }): JSX.Element {
  const [dataUser] = useState(rest.user);
  const [level, setLevel] = useState(dataUser.level);
  const [challengesCompleted, setChallengesCompleted] = useState(
    dataUser.challenges
  );
  const [currentExperience, setCurrentExperience] = useState(
    dataUser.currentxp
  );
  const [totalExperience, setTotalExperience] = useState(dataUser.totalxp);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const [profileData, setProfileData] = useState({
    user: dataUser.user,
    level: level,
    challenges: challengesCompleted,
    currentxp: currentExperience,
    totalxp: totalExperience,
  });

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  // useEffect(() => {
  //   Cookies.set('level', String(level));
  //   Cookies.set('currentExperience', String(currentExperience));
  //   Cookies.set('challengesCompleted', String(challengesCompleted));
  // }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    setProfileData({
      user: dataUser.user,
      level: level,
      challenges: challengesCompleted,
      currentxp: currentExperience,
      totalxp: totalExperience,
    });
  }, [level, currentExperience, challengesCompleted, totalExperience]);

  useMemo(() => {
    rest.updateUser(profileData);
  }, [profileData]);

  function levelUp(): void {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal(): void {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge(): void {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    const notify = (): string =>
      toast(`New challenge available! Earn ${challenge.amount} xp.`, {
        duration: 1000 * 10,
        style: {
          background: 'var(--title)',
          borderRadius: '5px',
          color: 'var(--shape)',
        },
        icon: '🥊',
        role: 'status',
        ariaLive: 'polite',
      });

    notify();

    if (
      'showNotification' in ServiceWorkerRegistration.prototype &&
      'PushManager' in window &&
      !(Notification.permission === 'denied')
    ) {
      // new Audio('/notification.mp3').play();
      new Notification('New challenge 🎉 | move.it', {
        body: `Earn ${challenge.amount} xp when completing this task`,
      });
    }

    if (Notification.permission === 'granted') {
      console.log('permission granted 🎉');
    }
  }

  function resetChallenge(): void {
    setActiveChallenge(null);
  }

  function completeChallenge(): void {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    resetChallenge();
    setChallengesCompleted(challengesCompleted + 1);
    setTotalExperience(totalExperience + amount);
    rest.stealing && levelUp();
    // dataUser.user.email === 'jpfricks@gmail.com' && levelUp();
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        profileData,
        totalExperience,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
