import { NextWeekContainer, Temperature } from './styles';
import Sunny from '../../assets/icons/01d.svg';
import { useContext, useEffect } from 'react';
import { getWeatherForecast } from '../../services/weather';
import { WeatherContext } from '../../contexts/WeatherContext';

export function NextWeek() {
  const { cityName } = useContext(WeatherContext);

  useEffect(() => {
    async function fetchWeather() {
      if (!cityName) return;
      const data = await getWeatherForecast(cityName);
      console.log(data);
    }

    fetchWeather();
  }, [cityName]);

  return (
    <NextWeekContainer>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={Sunny} alt="" width={36} />
            </td>
            <td width="50%">Terça</td>
            <Temperature>11°</Temperature>
            <Temperature>22°</Temperature>
          </tr>
        </tbody>
      </table>
    </NextWeekContainer>
  );
}
