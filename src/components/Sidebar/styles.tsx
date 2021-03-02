import styled, { keyframes } from 'styled-components';

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  animation: ${fadeLeft} 1s;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    .btn-signout {
      appearance: none;
      background: transparent;
      border: 0;
      font-size: 0;

      &:hover {
        svg {
          filter: brightness(0.9);
        }
      }

      svg {
        color: var(--red);
        transition: all 300ms ease;
      }
    }
  }
`;
