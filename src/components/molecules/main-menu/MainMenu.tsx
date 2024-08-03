import { useState } from 'react';
import type { MenuItem, MenuItemsWithPages, Page } from '@/types';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { IconBtnMenu, Isotipo } from '@/assets/svgs';
import { config } from '@/config';
import { SubMenu } from './SubMenu';
import './main-menu.scss';

interface Props {
  items: MenuItemsWithPages[];
  isLoading: boolean;
}

export function MainMenu({ items = [], isLoading }: Props) {
  const [show, setShow] = useState(false);
  const toggleShowMenu = () => {
    setShow(s => !s);
  };

  return (
    <nav className={`main-menu ${show ? 'show' : ''}`}>
      <button onClick={toggleShowMenu}>
        <IconBtnMenu />
      </button>
      <span onClick={toggleShowMenu}></span>
      {isLoading ? (
        <Skeleton variant='rounded' />
      ) : (
        <ul>
          <li>
            <Isotipo />
          </li>
          {items.map(({ menu, submenu }) => {
            return (
              <MainMenuItem
                item={menu}
                submenu={submenu}
                handle={toggleShowMenu}
                key={menu.id}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
}

interface MainMenuItemProps {
  item: MenuItem;
  submenu: Page[];
  handle: () => void;
}

function MainMenuItem({ item, submenu, handle }: MainMenuItemProps) {
  return (
    <li key={item.id}>
      {item.href === '#' ? (
        <>
          <div>{item.label}</div>
          <SubMenu items={submenu} parentSlug={item.slug} handle={handle} />
        </>
      ) : (
        <Link
          to={
            config.baseUrl + item.href.startsWith('/') &&
            !item.href.startsWith('http')
              ? item.href.slice(1)
              : item.href
          }
          target={item.target}
          onClick={handle}
        >
          {item.label}
        </Link>
      )}
    </li>
  );
}
