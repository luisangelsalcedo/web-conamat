import { useAtom, useSetAtom } from 'jotai';
import {
  getMenuitemsAtom,
  getMenuitemsWithPagesAtom,
  menuItemsAtom,
} from '@/store';

export function useMenuItem() {
  const [menuItems] = useAtom(menuItemsAtom);
  const getMenuitems = useSetAtom(getMenuitemsAtom);
  const getMenuitemsWithPages = useSetAtom(getMenuitemsWithPagesAtom);

  return { menuItems, getMenuitems, getMenuitemsWithPages };
}
