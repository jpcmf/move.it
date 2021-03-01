import styled from 'styled-components';

export const Container = styled.div`
  align-items: stretch;
  background-image: linear-gradient(var(--shape), var(--background));
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  min-width: 5rem;
  width: 7rem;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;

    img {
      display: block;
      max-width: 3rem;
      width: 100%;
    }
  }

  nav {
  }

  footer {
  }
`;
