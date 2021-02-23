import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: solid 1px #d7d8da;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3.5rem 0;
  padding: 1rem;
  font-weight: 500;

  span {
    font-size: 1.25rem;

    + span {
      font-size: 1.5rem;
    }
  }
`;
