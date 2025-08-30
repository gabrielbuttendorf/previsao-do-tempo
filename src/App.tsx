import { WeatherProvider } from './contexts/WeatherContext';
import { Main } from './pages/Main';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div>
      <GlobalStyle />
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    </div>
  );
}
