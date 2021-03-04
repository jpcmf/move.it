import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background: rgba(242, 243, 245, 0.8);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Container = styled.div`
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  padding: 2rem 3rem;
  position: relative;
  text-align: center;
  width: 100%;

  span {
    background-size: contain;
    background: url('/icons/levelup.svg') no-repeat center;
    color: var(--blue);
    font-size: 8.75rem;
    font-weight: 600;
    display: block;
  }

  strong {
    color: var(--title);
    font-size: 2.25rem;
  }

  p {
    color: var(--text);
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;
