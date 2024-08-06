import { atom } from 'jotai';
import { Video } from '@/types';
import { serviceGetAllVideos } from '@/api/services';

interface videoState {
  data: Video[];
  currentPage: number;
  isLoading: boolean;
  error?: any;
}
const videoInit: videoState = {
  data: [],
  isLoading: false,
  currentPage: 1,
};

export const videoAtom = atom(videoInit);
export const getVideosAtom = atom(
  () => null,
  async (get, set, { page = 1, limit }: { page: number; limit?: number }) => {
    const state = get(videoAtom);
    let tempState = { ...state };

    !state.data.length && set(videoAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllVideos(page, limit);
      tempState = {
        ...state,
        data,
        currentPage: page,
        error: undefined,
      };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(videoAtom, { ...tempState, isLoading: false });
    }
  }
);
