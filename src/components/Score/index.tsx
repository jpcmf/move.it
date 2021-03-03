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
    <ul>
      {usersSorted.map((user, idx) => {
        return (
          <li>
            {idx + 1}
            {user.user.name}
          </li>
        );
      })}
    </ul>
  );
}
