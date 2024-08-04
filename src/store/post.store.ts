import { atom } from 'jotai';
import { Post } from '@/types';
import { serviceGetAllPost, serviceGetPostById } from '@/api/services';

interface postState {
  data: Post[];
  currentPage: number;
  post?: Post;
  isLoading: boolean;
  error?: any;
}
const postInit: postState = {
  data: [],
  isLoading: false,
  currentPage: 1,
};

export const postAtom = atom(postInit);
export const getPostsAtom = atom(
  () => null,
  async (get, set, page: number = 1) => {
    const state = get(postAtom);
    let tempState = { ...state };

    !state.data.length && set(postAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllPost(page);
      tempState = { ...state, data, currentPage: page, error: undefined };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getPostAtom = atom(
  () => null,
  async (get, set, id: number) => {
    const state = get(postAtom);
    let tempState = { ...state };

    set(postAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetPostById(id);
      tempState = { ...state, post: data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);
