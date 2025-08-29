import { useEffect, useState } from 'react';
import {
  CurrentDayContainer,
  CurrentWeather,
  Temperature,
  Title,
} from './styles';
import { getCurrentWeather } from '../../services/weather';
import { weatherIcons } from '../../utils/weatherIcons';

type WeatherIconCode =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';

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
    icon: WeatherIconCode;
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

  const weatherIconCode = currentWeather?.weather?.[0]?.icon;
  const weatherIcon = weatherIcons[weatherIconCode as WeatherIconCode];

  return (
    <CurrentDayContainer>
      <img src={weatherIcon} alt="" />

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
