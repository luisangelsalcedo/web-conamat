import { serviceGetAllPopups } from '@/api/services';
import { Popup } from '@/types';
import { atom } from 'jotai';

// * Popups -----------------------------------------
interface PopupState {
  data: Popup[];
  isLoading: boolean;
  error?: any;
}
const popupInit: PopupState = {
  data: [],
  isLoading: true,
};

export const popupsAtom = atom(popupInit);
export const getPopupsAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(popupsAtom);
    let tempState = { ...state };

    set(popupsAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllPopups();
      tempState = { ...state, data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(popupsAtom, { ...tempState, isLoading: false });
    }
  }
);
