import { atom } from 'jotai';
import { BlogItem } from '@/types';
import { serviceGetAllBlogItem, serviceGetBlogItemById } from '@/api/services';

interface blogItemState {
  data: BlogItem[];
  currentPage: number;
  post?: BlogItem;
  isLoading: boolean;
  error?: any;
}
const blogItemInit: blogItemState = {
  data: [],
  isLoading: true,
  currentPage: 1,
};

export const blogItemAtom = atom(blogItemInit);
export const getBlogItemsAtom = atom(
  () => null,
  async (get, set, page: number = 1) => {
    const state = get(blogItemAtom);
    let tempState = { ...state };

    try {
      const data = await serviceGetAllBlogItem(page);
      tempState = { ...state, data, currentPage: page };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(blogItemAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getBlogItemAtom = atom(
  () => null,
  async (get, set, id: number) => {
    const state = get(blogItemAtom);
    let tempState = { ...state };

    try {
      const data = await serviceGetBlogItemById(id);
      tempState = { ...state, post: data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(blogItemAtom, { ...tempState, isLoading: false });
    }
  }
);
