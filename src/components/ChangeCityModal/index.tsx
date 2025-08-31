import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './styles';
import { useWeather } from '../../contexts/WeatherContext';
import { useState, type FormEvent } from 'react';
import { X } from 'phosphor-react';

export function ChangeCityModal() {
  const { setCityName } = useWeather();
  const [inputValue, setInputValue] = useState('');

  function handleCitySubmit(event: FormEvent) {
    event.preventDefault();
    if (!inputValue.trim()) return;

    setCityName(inputValue);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={24}/>
        </Close>
        <Dialog.Title>Buscar localização</Dialog.Title>

        <form action="" onSubmit={handleCitySubmit}>
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <button type="submit">OK</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
