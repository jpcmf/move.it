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

export const Container = styled.aside`
  align-items: stretch;
  animation: 700ms ease 0s 1 ${fadeLeft};
  background-image: linear-gradient(var(--shape), var(--background));
  display: flex;
  filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  min-width: 5rem;
  width: 7rem;
  position: fixed;

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
    ul {
      li {
        text-align: center;
        position: relative;
        padding: 0.5rem 0;
        margin: 0.5rem 0;

        &.active {
          &:before {
            background-color: var(--green);
            border-radius: 0 0.3125rem 0.3125rem 0;
            bottom: 0;
            content: '';
            display: block;
            left: 0;
            position: absolute;
            top: 0;
            width: 0.25rem;
          }

          a {
            svg {
              fill: var(--green);
            }
          }
        }

        a {
          svg {
            fill: var(--text);
            transition: fill 300ms ease;
          }

          &:hover {
            svg {
              fill: var(--green);
            }
          }
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    flex-direction: column;

    .switch-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0.5rem;

      i {
        margin-bottom: 0.5rem;
        font-size: 28px;
      }
    }

    .btn-wrapper {
      padding-top: 0.5rem;
    }

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
