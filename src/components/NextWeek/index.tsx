import { NextWeekContainer, Temperature } from './styles';
import { useWeather } from '../../contexts/WeatherContext';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { weatherIcons } from '../../utils/weatherIcons';

export function NextWeek() {
  const { forecast } = useWeather();

  if (!forecast) return null;

  return (
    <NextWeekContainer>
      <table>
        <tbody>
          {forecast.map((day, index) => (
            <tr key={index}>
              <td>
                <img
                  src={weatherIcons[day.icon as keyof typeof weatherIcons]}
                  alt=""
                  width={36}
                />
              </td>
              <td width="50%">
                {format(parseISO(day.date), 'EEE', { locale: ptBR })}
              </td>
              <Temperature>{day.min.toFixed()}°</Temperature>
              <Temperature>{day.max.toFixed()}°</Temperature>
            </tr>
          ))}
        </tbody>
      </table>
    </NextWeekContainer>
  );
}
