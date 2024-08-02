import { atom } from 'jotai';
import { Page } from '@/types';
import { serviceGetAllPages } from '@/api/services';

interface PageState {
  data: Page[];
  isLoading: boolean;
  error?: any;
}
const pagesInit: PageState = {
  data: [],
  isLoading: false,
};

export const pagesAtom = atom(pagesInit);
export const getPagesAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(pagesAtom);
    let tempState = { ...state };

    set(pagesAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllPages();
      tempState = { ...state, data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(pagesAtom, { ...tempState, isLoading: false });
    }
  }
);
