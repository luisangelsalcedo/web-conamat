import { atom } from 'jotai';
import { Post } from '@/types';
import {
  serviceGetAllPost,
  serviceGetAllPostSticky,
  serviceGetPostById,
  serviceGetPostByIdAndSlug,
  serviceGetPostBySlug,
} from '@/api/services';

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
  async (
    get,
    set,
    page: number = 1,
    { sticky = false }: { sticky?: boolean } = {}
  ) => {
    const state = get(postAtom);
    let tempState = { ...state };

    !state.data.length && set(postAtom, { ...state, isLoading: true });

    try {
      const data = sticky
        ? await serviceGetAllPostSticky(page)
        : await serviceGetAllPost(page);
      tempState = {
        ...state,
        data,
        currentPage: page,
        error: undefined,
        post: undefined,
      };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getPostByIdAtom = atom(
  () => null,
  async (get, set, id: number) => {
    const state = get(postAtom);
    let tempState = { ...state };

    !state.post && set(postAtom, { ...state, isLoading: true });

    try {
      const post = await serviceGetPostById(id);
      tempState = { ...state, post };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getPostBySlugAtom = atom(
  () => null,
  async (get, set, slug: string) => {
    const state = get(postAtom);
    let tempState = { ...state };

    !state.post && set(postAtom, { ...state, isLoading: true });

    try {
      const post = await serviceGetPostBySlug(slug);
      tempState = { ...state, post };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getPostByIdAndSlugAtom = atom(
  () => null,
  async (get, set, id: number, slug: string) => {
    const state = get(postAtom);
    let tempState = { ...state };

    !state.post && set(postAtom, { ...state, isLoading: true });

    try {
      const post = await serviceGetPostByIdAndSlug(id, slug);
      tempState = { ...state, post };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(postAtom, { ...tempState, isLoading: false });
    }
  }
);
