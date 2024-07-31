import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { getMenuitemsAtom, menuItemsAtom } from '@/store';

export function useMenuItem() {
  const [menuItems] = useAtom(menuItemsAtom);
  const getMenuitems = useSetAtom(getMenuitemsAtom);

  useEffect(() => {
    !menuItems.data.length && getMenuitems();
  }, []);

  return { menuItems };
}
