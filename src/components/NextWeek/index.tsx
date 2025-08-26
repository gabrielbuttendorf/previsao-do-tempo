import { NextWeekContainer, Temperature } from './styles';
import Sunny from '../../assets/sunny.svg';

export function NextWeek() {
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
