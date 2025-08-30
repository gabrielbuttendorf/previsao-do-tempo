import { MapPin } from 'phosphor-react';
import { HeaderContent } from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useWeather } from '../../contexts/WeatherContext';
import * as Dialog from '@radix-ui/react-dialog';
import { ChangeCityModal } from '../ChangeCityModal';

export function Header() {
  const today = format(new Date(), "iii, dd 'de' LLLL", { locale: ptBR });
  const { currentWeather } = useWeather();

  return (
    <div>
      <HeaderContent>
        <div>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <MapPin size={28} />
              </button>
            </Dialog.Trigger>

            <ChangeCityModal />
          </Dialog.Root>
          <p>{currentWeather?.name}</p>
        </div>

        <span>{today}</span>
      </HeaderContent>
    </div>
  );
}
