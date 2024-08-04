import { useAtom, useSetAtom } from 'jotai';
import {
  getMenuitemsAtom,
  getMenuitemsWithPagesAtom,
  menuItemsAtom,
  getMenuItemByIdSlugAtom,
} from '@/store';

export function useMenuItem() {
  const [menuItems] = useAtom(menuItemsAtom);
  const getMenuitems = useSetAtom(getMenuitemsAtom);
  const getMenuItemByIdSlug = useSetAtom(getMenuItemByIdSlugAtom);
  const getMenuitemsWithPages = useSetAtom(getMenuitemsWithPagesAtom);

  return {
    menuItems,
    getMenuitems,
    getMenuItemByIdSlug,
    getMenuitemsWithPages,
  };
}
