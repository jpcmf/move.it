import { Container } from './styles';

export function Score(props) {
  let usersSorted = [];

  const list = props.profiles;

  Object.keys(list)
    .sort((a, b) => {
      return list[a].totalxp - list[b].totalxp;
    })
    .map((key) => {
      usersSorted.push(
        Object.assign(
          {
            key: list[key],
          },
          list[key]
        )
      );
      return usersSorted;
    });
  return (
    <Container>
      {usersSorted.map((user, idx) => {
        return (
          <li key={user.key} className={idx === 0 ? 'top-user' : 'user'}>
            <div className="position">
              <strong>{idx + 1}</strong>
            </div>

            <div className="info">
              <span className="profile">
                <img
                  className="avatar"
                  src={user.user.image}
                  alt={user.user.name}
                />

                <div>
                  <strong>{user.user.name}</strong>
                  <span>
                    <img src="icons/level.svg" alt="icon level" />
                  </span>
                </div>
              </span>
              <span className="score">
                <span>
                  <p>
                    <strong>{user.challenges}</strong> completed
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{user.totalxp}</strong> xp
                  </p>
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </Container>
  );
}
