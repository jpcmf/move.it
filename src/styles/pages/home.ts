import styled from 'styled-components';

import { device } from '../device';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem; */
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem;
`;

export const Section = styled.section`
  align-content: center;
  display: grid;
  flex: 1;
  grid-gap: 6.25rem;
  grid-template-columns: repeat(1fr);
  padding: 3.5rem 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 0;
  }
`;

export const ContainerLeft = styled.div`
  /* border: 1px solid #000; */
`;

export const ContainerRight = styled.div`
  /* border: 1px solid #000; */
`;
