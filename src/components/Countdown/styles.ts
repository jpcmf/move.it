import styled from 'styled-components';

export const Container = styled.div`
  .clock {
    align-items: center;
    color: var(--title);
    display: flex;
    font-family: Rajdhani;
    font-weight: 600;

    > div {
      align-items: center;
      background: var(--white);
      border-radius: 5px;
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      display: flex;
      flex: 1;
      font-size: 8.5rem;
      justify-content: space-evenly;
      text-align: center;

      span {
        flex: 1;

        &:first-child {
          border-right: 1px solid #f0f1f3;
        }

        &:last-child {
          border-left: 1px solid #f0f1f3;
        }
      }
    }

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  }

  button {
    align-items: center;
    background: var(--blue);
    border-radius: 5px;
    border: 0;
    color: var(--white);
    display: flex;
    font-size: 1.25rem;
    font-weight: 600;
    height: 5rem;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    transition: background 300ms ease;

    &:hover {
      background: var(--blue-dark);
    }

    img {
      margin-left: 0.5rem;
    }
  }
`;
