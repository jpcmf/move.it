import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue) url('/background-signin.png') no-repeat center left;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  padding: 2.5rem 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: left;

  > img {
    margin-bottom: 2rem;
  }

  strong {
    color: var(--white);
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-right: 1.5rem;
    }

    p {
      color: var(--blue-light);
      font-weight: 500;
      font-size: 1.25rem;
    }
  }

  button {
    background: var(--blue-dark);
    border-radius: 5px;
    border: 0;
    height: 5rem;
    margin-top: 2.5rem;
    width: 5rem;
    transition: background 300ms ease;

    &:hover {
      background: var(--blue-light);
    }
  }
`;
