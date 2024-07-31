import { Container, MainLogo } from '@/components/atoms';
import { SocialMediaMenu } from '../socialmedia-menu/SocialMediaMenu';
import './header.scss';

export function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header-top'>
          <MainLogo></MainLogo>
          <SocialMediaMenu></SocialMediaMenu>
        </div>
        <div>[MAIN-MENU]</div>
      </Container>
    </header>
  );
}
