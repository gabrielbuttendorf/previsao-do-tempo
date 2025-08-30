import { MapPin } from 'phosphor-react';
import { HeaderContent } from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useWeather } from '../../contexts/WeatherContext';

export function Header() {
  const today = format(new Date(), "iii, dd 'de' LLLL", { locale: ptBR });
  const { currentWeather } = useWeather();

  return (
    <div>
      <HeaderContent>
        <div>
          <MapPin size={28} />
          <p>{currentWeather?.name}</p>
        </div>

        <span>{today}</span>
      </HeaderContent>
    </div>
  );
}
