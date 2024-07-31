import { Container, MainLogo } from '@/components/atoms';
import './header.scss';

export function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header-top'>
          <MainLogo></MainLogo>
          <div>[SOCIAL-MEDIA-MENU]</div>
        </div>
        <div>[MAIN-MENU]</div>
      </Container>
    </header>
  );
}
