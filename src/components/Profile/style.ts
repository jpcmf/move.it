import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;

  > img {
    border-radius: 50%;
    height: 5.5rem;
    width: 5.5rem;
  }

  div {
    margin-left: 1rem;

    strong {
      color: var(--title);
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      display: flex;
      align-items: center;
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
