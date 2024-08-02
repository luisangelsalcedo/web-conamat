import { atom } from 'jotai';
import { MenuItem } from '@/types';
import { serviceGetAllMenuItem } from '@/api/services';

interface MenuItemState {
  data: MenuItem[];
  isLoading: boolean;
  error?: any;
}

const menuItemsInit: MenuItemState = {
  data: [],
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
