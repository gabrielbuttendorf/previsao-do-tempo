import { useEffect, useState } from 'react';
import Sunny from '../../assets/sunny.svg';
import {
  CurrentDayContainer,
  CurrentWeather,
  Temperature,
  Title,
} from './styles';
import { getCurrentWeather } from '../../services/weather';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export function CurrentDay() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );

  const city = 'Jaragua do Sul';

  useEffect(() => {
    async function fetchWeather() {
      const data = await getCurrentWeather(city);
      setCurrentWeather(data);
      console.log(data);
    }

    fetchWeather();
  }, [city]);

  function formatDescription(desc?: string) {
    if (!desc) return '';
    return desc.charAt(0).toUpperCase() + desc.slice(1).toLowerCase();
  }

  return (
    <CurrentDayContainer>
      <img src={Sunny} alt="" />

      <CurrentWeather>
        <div>
          <Temperature>{currentWeather?.main.temp.toFixed()}°C</Temperature>
          <span>
            {formatDescription(currentWeather?.weather?.[0]?.description)}
          </span>
        </div>
        <div>
          <Title>Umidade</Title>
          <span>{currentWeather?.main.humidity}%</span>
        </div>
        <div>
          <Title>Sensação</Title>
          <span>{currentWeather?.main.feels_like.toFixed()}°C</span>
        </div>
      </CurrentWeather>
    </CurrentDayContainer>
  );
}
