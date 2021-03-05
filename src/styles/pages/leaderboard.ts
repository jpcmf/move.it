import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.div``;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 7rem auto 0;
  max-width: 992px;
  padding: 2.5rem 2rem;
  width: 100%;

  @media ${device.tablet} {
    margin: 0 auto;
  }

  > header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 2.75rem;

    h2 {
      color: var(--title);
      font-size: 2.8rem;
    }
  }
`;

export const Section = styled.section`
  > header {
    display: grid;
    grid-template-columns: 2fr 6fr 2fr 2fr;
    margin-bottom: 1.25rem;
    width: 100%;

    p {
      color: var(--text);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;

      @media ${device.tablet} {
        font-size: 1rem;
      }
    }
  }
`;
