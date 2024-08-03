import { useEffect } from 'react';
import { useMenuItem } from '@/store/hooks';
import { Container, MainLogo } from '@/components/atoms';
import { SocialMediaMenu } from '../socialmedia-menu/SocialMediaMenu';
import { MainMenu } from '../main-menu/MainMenu';
import './header.scss';

export function Header() {
  const { menuItems, getMenuitemsWithPages } = useMenuItem();
  useEffect(() => {
    !menuItems.menuWithSubmenu?.length && getMenuitemsWithPages();
  }, []);

  return (
    <header className='header'>
      <Container>
        <div className='header-top'>
          <MainLogo></MainLogo>
          <SocialMediaMenu></SocialMediaMenu>
        </div>
        <MainMenu
          items={menuItems.menuWithSubmenu ?? []}
          isLoading={menuItems.isLoading}
        />
      </Container>
    </header>
  );
}
