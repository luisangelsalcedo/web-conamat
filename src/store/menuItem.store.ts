import { atom } from 'jotai';
import { MenuItem, MenuItemsWithPages } from '@/types';
import {
  serviceGetAllMenuItem,
  serviceGetAllMenuItemsWithPage,
  serviceGetMenuItemBySlug,
} from '@/api/services';

interface MenuItemState {
  data: MenuItem[];
  isLoading: boolean;
  error?: any;
  menuWithSubmenu?: MenuItemsWithPages[];
  menuItem?: MenuItem;
}

const menuItemsInit: MenuItemState = {
  data: [],
  menuWithSubmenu: [],
  isLoading: false,
};

export const menuItemsAtom = atom(menuItemsInit);
export const getMenuitemsAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(menuItemsAtom);
    let tempState = { ...state };

    set(menuItemsAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllMenuItem();
      tempState = { ...state, data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(menuItemsAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getMenuItemByIdSlugAtom = atom(
  () => null,
  async (get, set, slug: string) => {
    const state = get(menuItemsAtom);
    let tempState = { ...state };

    try {
      const menuItem = await serviceGetMenuItemBySlug(slug); // return [{}]
      tempState = { ...state, menuItem };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(menuItemsAtom, { ...tempState });
    }
  }
);

export const getMenuitemsWithPagesAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(menuItemsAtom);
    let tempState = { ...state };

    set(menuItemsAtom, { ...state, isLoading: true });

    try {
      const menuWithSubmenu = await serviceGetAllMenuItemsWithPage();
      tempState = { ...state, menuWithSubmenu };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(menuItemsAtom, { ...tempState, isLoading: false });
    }
  }
);
