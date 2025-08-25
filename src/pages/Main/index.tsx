import { CurrentDay } from '../../components/CurrentDay';
import { Header } from '../../components/Header';
import { MainContainer, MainContent } from './styles';

export function Main() {
  return (
    <MainContainer>
      <MainContent>
        <Header />
        <CurrentDay />
      </MainContent>
    </MainContainer>
  );
}
