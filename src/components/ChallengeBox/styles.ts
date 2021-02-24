import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.5rem 2rem;

  .not-active {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    strong,
    p {
      line-height: 1.4;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
    }

    p {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      max-width: 70%;
      text-align: center;

      img {
        margin-bottom: 1rem;
      }
    }
  }

  .active {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    header {
      border-bottom: solid 1px var(--gray-line);
      color: var(--blue);
      font-size: 1.25em;
      font-weight: 600;
      padding: 0 2rem 1.5rem;
      text-align: center;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: flex;

      button + button {
        margin-left: 1rem;
      }

      button {
        align-items: center;
        border-radius: 5px;
        border: 0;
        color: var(--white);
        display: flex;
        font-size: 1rem;
        font-weight: 600;
        height: 3rem;
        justify-content: center;
        width: 100%;
        transition: filter 300ms ease;

        &.btn-failed {
          background: var(--red);
        }

        &.btn-completed {
          background: var(--green);
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
