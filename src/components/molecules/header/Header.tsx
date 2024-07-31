import { Container, MainLogo } from '@/components/atoms';
import { SocialMediaMenu } from '../socialmedia-menu/SocialMediaMenu';
import { MainMenu } from '../main-menu/MainMenu';
import { useMenuItem } from '@/store/hooks';
import './header.scss';

export function Header() {
  const { menuItems } = useMenuItem();

  return (
    <header className='header'>
      <Container>
        <div className='header-top'>
          <MainLogo></MainLogo>
          <SocialMediaMenu></SocialMediaMenu>
        </div>
        <MainMenu items={menuItems.data} isLoading={menuItems.isLoading} />
      </Container>
    </header>
  );
}
