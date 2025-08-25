import { List, MapPin } from 'phosphor-react';
import { HeaderContent } from './styles';

export function Header() {
  return (
    <div>
      <HeaderContent>
        <div>
          <MapPin size={28} />
          <p>London</p>
        </div>

        <span>Seg, 23 mar.</span>

        <List size={28} />
      </HeaderContent>
    </div>
  );
}
