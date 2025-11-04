import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './styles';
import { useWeather } from '../../contexts/WeatherContext';
import { useRef, useState, type FormEvent } from 'react';
import { X } from 'phosphor-react';
import { useForm } from 'react-hook-form';

export function ChangeCityModal() {
  const { register, handleSubmit, watch } = useForm();

  const { setCityName } = useWeather();
  const [inputValue, setInputValue] = useState('');

  const closeRef = useRef<HTMLButtonElement>(null);

  function handleCitySubmit(data: any) {
    // event.preventDefault();
    // if (!inputValue.trim()) return;

    setCityName(data.city);
    // setInputValue('');
    closeRef.current?.click();
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

          <button type="submit" disabled={cityIsEmpty}>OK</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}