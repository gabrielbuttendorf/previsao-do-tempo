import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getCurrentWeather } from '../services/weather';
import type { WeatherData } from '../components/CurrentDay';

interface WeatherContextData {
  cityName: string;
  setCityName: (name: string) => void;
  currentWeather: WeatherData | null;
}

interface WeatherProviderProps {
  children: ReactNode;
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

  useEffect(() => {
    if (!cityName) return;
    async function fetchWeather() {
      const data = await getCurrentWeather(cityName);
      setCurrentWeather(data);
      console.log(data);
    }

    fetchWeather();
  }, [cityName]);

  return (
    <WeatherContext.Provider value={{ cityName, setCityName, currentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);
