import styled from 'styled-components';

export const Container = styled.header`
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
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
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`;
