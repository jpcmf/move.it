import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.3rem;
    }
  }

  > div {
    background: var(--gray-line);
    border-radius: 4px;
    flex: 1;
    height: 4px;
    margin: 0 1.5rem;
    position: relative;

    > div {
      background: var(--green);
      border-radius: 4px;
      height: 4px;
    }

    span.current-xp {
      background-color: var(--green);
      border-radius: 0.3rem;
      color: var(--white);
      padding: 0.3rem 0.5rem;
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`;
