import { atom } from 'jotai';
import { Page } from '@/types';
import {
  serviceGetAllPages,
  serviceGetPageById,
  serviceGetPageBySlug,
} from '@/api/services';

interface PageState {
  data: Page[];
  isLoading: boolean;
  error?: any;
  page?: Page;
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

export const getPageByIdAtom = atom(
  () => null,
  async (get, set, id: number) => {
    const state = get(pagesAtom);
    let tempState = { ...state };

    set(pagesAtom, { ...state, isLoading: true });

    try {
      const page = await serviceGetPageById(id); // return {}
      tempState = { ...state, page };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(pagesAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getPageBySlugAtom = atom(
  () => null,
  async (get, set, slug: string) => {
    const state = get(pagesAtom);
    let tempState = { ...state };

    set(pagesAtom, {
      ...state,
      isLoading: true,
      error: undefined,
      page: undefined,
    });

    try {
      const page = await serviceGetPageBySlug(slug); // return [{}]
      tempState = { ...state, page };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(pagesAtom, { ...tempState, isLoading: false });
    }
  }
);
