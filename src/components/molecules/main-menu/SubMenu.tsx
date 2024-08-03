import type { Page } from '@/types';
import { config } from '@/config';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  items: Page[];
  parentSlug: string;
  handle: () => void;
}

export function SubMenu({ items, parentSlug, handle }: Props) {
  const location = useLocation();
  return (
    <nav className='submenu'>
      <ul>
        {items.map(submenuItem => {
          const href = `${config.baseUrl}${parentSlug}/${submenuItem.slug}`;
          return (
            <li key={submenuItem.slug + submenuItem.id}>
              <Link
                to={href}
                className={location.pathname === href ? 'hover' : ''}
                onClick={handle}
              >
                {submenuItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
