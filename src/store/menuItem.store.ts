import { atom } from 'jotai';
import { MenuItem } from '@/types';
import { serviceGetAllMenuItem } from '@/services';

interface MenuItemState {
  data: MenuItem[];
  isLoading: boolean;
  error?: any;
}

const menuItemsInit: MenuItemState = {
  data: [],
  isLoading: true,
};

export const menuItemsAtom = atom(menuItemsInit);
export const getMenuitemsAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(menuItemsAtom);
    let tempState = { ...state };

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
