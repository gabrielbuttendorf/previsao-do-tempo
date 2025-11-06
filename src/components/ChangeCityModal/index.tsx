import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './styles';
import { useWeather } from '../../contexts/WeatherContext';
import { useRef, useState } from 'react';
import { X } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { getWeatherForecast } from '../../services/weather';

type CityFormData = {
  city: string;
};

export function ChangeCityModal() {
  const { register, handleSubmit, watch, reset } = useForm<CityFormData>();
  const { setCityName } = useWeather();

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);

  async function handleCitySubmit(data: CityFormData) {
    const city = data.city.trim();
    if (!city) return;

    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await getWeatherForecast(city);

      if (Number(response.cod) === 404) {
        setErrorMessage('Cidade não encontrada.');
        setIsLoading(false);
        return;
      }

      setCityName(city);
      setIsLoading(false);
      closeRef.current?.click();
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Erro. Tente novamente.');
      }

      setIsLoading(false);
    }
  }

  const cityValue = watch('city') || '';
  const cityIsEmpty = cityValue.trim() === '';

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close asChild>
          <button ref={closeRef} type="button">
            <X size={24} />
          </button>
        </Close>
        <Dialog.Title>Buscar localização</Dialog.Title>

        <form action="" onSubmit={handleSubmit(handleCitySubmit)}>
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            {...register('city')}
          />

          {errorMessage && <p>{errorMessage}</p>}

          <button type="submit" disabled={cityIsEmpty}>
            {isLoading ? 'Buscando...' : 'OK'}
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
