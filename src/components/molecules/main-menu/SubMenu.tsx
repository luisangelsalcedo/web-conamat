import { config } from '@/config';
import { usePages } from '@/store/hooks';
import type { MenuItem } from '@/types';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  item: MenuItem;
  handle: () => void;
}

export function SubMenu({ item, handle }: Props) {
  const { pages } = usePages();

  const submenu = pages.data
    .filter(page => page.menuitem[0] === item.id)
    .toSorted();

  const location = useLocation();
  return (
    <nav className='submenu'>
      <ul>
        {submenu.map(subItem => {
          const href = `${config.baseUrl}${item.slug}/${subItem.slug}`;
          return (
            <li key={subItem.slug + subItem.id}>
              <Link
                to={href}
                className={location.pathname === href ? 'hover' : ''}
                onClick={handle}
              >
                {subItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
