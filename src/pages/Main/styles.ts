import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#e7e7e7ff, #dbdbdbff);
  padding: 1rem;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
  }
`;