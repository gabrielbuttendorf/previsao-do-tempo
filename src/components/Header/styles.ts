import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background: #ccc;
  padding: 1rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;