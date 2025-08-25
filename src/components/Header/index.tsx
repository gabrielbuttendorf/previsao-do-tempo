import { List, MapPin } from 'phosphor-react';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <MapPin size={28} />
          <p>London</p>
        </div>

        <span>Seg, 23 mar.</span>

        <List size={28} />
      </HeaderContent>
    </HeaderContainer>
  );
}
