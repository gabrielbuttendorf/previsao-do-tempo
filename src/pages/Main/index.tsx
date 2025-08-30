import { useState } from 'react';
import { CurrentDay } from '../../components/CurrentDay';
import { Header } from '../../components/Header';
import { NextWeek } from '../../components/NextWeek';
import { MainContainer, MainContent } from './styles';

export function Main() {
  const [cityName, setCityName] = useState('Jaragua do Sul');

  return (
    <MainContainer>
      <MainContent>
        <Header cityName={cityName}/>
        <CurrentDay cityName={cityName} />
        <NextWeek />
      </MainContent>
    </MainContainer>
  );
}
