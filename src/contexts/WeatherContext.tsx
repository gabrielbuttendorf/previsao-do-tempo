import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { getCurrentWeather, getWeatherForecast } from '../services/weather';
import type { WeatherData, WeatherIconCode } from '../components/CurrentDay';

interface WeatherContextData {
  cityName: string;
  setCityName: (name: string) => void;
  currentWeather: WeatherData | null;
  forecast: ForecastDay[] | null;
}

interface WeatherProviderProps {
  children: ReactNode;
}

interface ForecastDay {
  date: string;
  min: number;
  max: number;
  icon: WeatherIconCode;
}

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherIconCode;
  }[];
}

interface WeatherForecastResponse {
  list: ForecastItem[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [cityName, setCityName] = useState('jaragua do sul');
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null);

  useEffect(() => {
    if (!cityName) return;

    async function fetchWeather() {
      const data = await getCurrentWeather(cityName);
      setCurrentWeather(data);

      const forecastData: WeatherForecastResponse = await getWeatherForecast(cityName);

      const groupedByDay: Record<string, ForecastItem[]> = {};
      forecastData.list.forEach((item: ForecastItem) => {
        const date = item.dt_txt.split(' ')[0];
        if (!groupedByDay[date]) {
          groupedByDay[date] = [];
        }

        groupedByDay[date].push(item);
      });

      const dailyForecast = Object.entries(groupedByDay)
        .slice(0, 5)
        .map(([date, items]) => {
          const temps = items.map((i: ForecastItem) => i.main.temp);
          const min = Math.min(...temps);
          const max = Math.max(...temps);

          const noonItem =
            items.find((i: ForecastItem) => i.dt_txt.includes('12:00:00')) ?? items[0];

          const icon = noonItem.weather[0].icon;

          return { date, min, max, icon };
        });

      setForecast(dailyForecast);
    }

    fetchWeather();
  }, [cityName]);

  return (
    <WeatherContext.Provider
      value={{ cityName, setCityName, currentWeather, forecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);
