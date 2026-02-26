import { CurrentDay } from '../../components/CurrentDay';
import { Header } from '../../components/Header';
import { NextWeek } from '../../components/NextWeek';
import { MainContainer, MainContent } from './styles';

export function Main() {
  return (
    <MainContainer>
      <MainContent>
        <Header />
        <CurrentDay />
        <NextWeek />
      </MainContent>
    </MainContainer>
  );
}
