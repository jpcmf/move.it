import { device } from '@/styles/device';
import styled from 'styled-components';

export const Container = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;

  .user,
  .top-user {
    display: grid;
    grid-template-columns: 1fr 11fr;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .position {
    align-items: center;
    background-color: var(--shape);
    border-bottom-left-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0.25rem;
    overflow: hidden;
    padding: 1rem;
    position: relative;

    strong {
      color: var(--title);
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .top-user {
    .position {
      &:before {
        background-size: contain;
        background: url('icons/medal.svg') no-repeat center center;
        bottom: 0;
        content: ' ';
        display: block;
        height: 2rem;
        position: absolute;
        right: 0;
        top: -0.25rem;
        width: 2rem;

        @media ${device.tablet} {
          height: 2.25rem;
          right: 0.25rem;
          width: 2.25rem;
        }
      }
    }
  }

  .info {
    background-color: var(--shape);
    border-bottom-right-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    display: grid;
    padding: 1rem;

    @media ${device.tablet} {
      grid-template-columns: 7fr 4fr;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;

    @media ${device.tablet} {
      margin-bottom: 0;
    }

    .avatar {
      border-radius: 50%;
      height: 3rem;
      margin-right: 1rem;
      width: 3rem;

      @media ${device.tablet} {
        height: 4rem;
        width: 4rem;
      }
    }

    strong {
      color: var(--title);
      font-size: 1rem;
      font-weight: 600;

      @media ${device.tablet} {
        font-size: 1.5rem;
      }
    }

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    span {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }

  .score {
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    span {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      @media ${device.tablet} {
        align-items: flex-start;
        text-align: left;
      }
    }

    p {
      color: var(--text);
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.4;

      @media ${device.tablet} {
        font-size: 1rem;
      }
    }

    strong {
      color: var(--blue-dark);
      font-size: 1.5rem;
      font-weight: 500;

      @media ${device.tablet} {
        font-size: 1rem;
      }
    }
  }
`;
