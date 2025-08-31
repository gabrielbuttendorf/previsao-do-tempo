import styled from 'styled-components';

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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    line-height: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transition: all 0.2s;
      color: #7e7e7eff;
    }
  }
`;