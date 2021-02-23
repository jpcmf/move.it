import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem;
`;

export const Section = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6.25rem;
  align-content: center;
`;

export const ContainerLeft = styled.div`
  /* border: 1px solid #000; */
`;

export const ContainerRight = styled.div`
  /* border: 1px solid #000; */
`;
