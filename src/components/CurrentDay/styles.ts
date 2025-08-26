import styled from 'styled-components';

export const CurrentDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#fff 50%, #fab040c0);
  padding: 1rem;
  border-radius: 8px;
`;

export const CurrentWeather = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  gap: 2rem;
  margin: 0 auto;

  div {
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
  }

  span {
    font-size: 1.2rem;
  }
`;

export const Temperature = styled.span`
  font-size: 4rem !important;
  line-height: 1.2;
`;
