import { Container } from '@/components/atoms';
import './header.scss';

export function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header-top'>[LOGO] [SOCIAL-MEDIA-MENU]</div>
        <div>[MAIN-MENU]</div>
      </Container>
    </header>
  );
}
