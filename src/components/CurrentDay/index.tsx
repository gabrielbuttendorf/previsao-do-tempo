import Sunny from '../../assets/sunny.svg';
import { CurrentDayContainer, CurrentWeather, Temperature } from './styles';

export function CurrentDay() {
  return (
    <CurrentDayContainer>
      <img src={Sunny} alt="" />

      <CurrentWeather>
        <div>
          <Temperature>28°</Temperature>
          <span>Sunny</span>
        </div>
        <div>
          <span>Rain</span>
          <span>0%</span>
        </div>
        <div>
          <span>Humidity</span>
          <span>10%</span>
        </div>
      </CurrentWeather>
    </CurrentDayContainer>
  )
}