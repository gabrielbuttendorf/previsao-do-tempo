import styled from "styled-components";

export const NextWeekContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 2px solid #FAAF40;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: flex-start;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
  }
`;

export const Temperature = styled.td`
  text-align: right;
`