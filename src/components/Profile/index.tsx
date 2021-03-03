import { useContext } from 'react';

import { ChallengesContext } from '@/contexts/ChallengesContext';
import { Container } from './style';

// interface ProfileProps {
//   data: {
//     user: {
//       image: string;
//       name: string;
//     };
//   };
// }

export function Profile(props) {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src={props.data.user.image} alt={props.data.user.name} />
      <div>
        <strong>{props.data.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="icon" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
