import { useEffect } from 'react';
import { useMenuItem } from '@/store/hooks';
import { Container, MainLogo } from '@/components/atoms';
import { MainMenu } from '../main-menu/MainMenu';
import { Organizado } from '../organizado/Organizado';
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
          <Organizado></Organizado>
        </div>
        <MainMenu
          items={menuItems.menuWithSubmenu ?? []}
          isLoading={menuItems.isLoading}
        />
      </Container>
    </header>
  );
}
