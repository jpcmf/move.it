import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useContext } from 'react';
import { Container } from './styles';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>
        0 <MdStarBorder size="16" />
      </span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span className="current-xp" style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} <MdStarHalf size="16" />
        </span>
      </div>
      <span>
        {experienceToNextLevel} <MdStar size="16" />
      </span>
    </Container>
  );
}
