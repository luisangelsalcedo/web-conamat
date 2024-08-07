import { atom } from 'jotai';
import { Gallery } from '@/types';
import {
  serviceGetAllGallery,
  serviceGetGalleryById,
  serviceGetGalleryBySlug,
} from '@/api/services';

interface galleryState {
  data: Gallery[];
  currentPage: number;
  gallery?: Gallery;
  isLoading: boolean;
  error?: any;
}
const galleryInit: galleryState = {
  data: [],
  isLoading: false,
  currentPage: 1,
};

export const galleryAtom = atom(galleryInit);
export const getGalleriesAtom = atom(
  () => null,
  async (get, set, { page = 1 }: { page: number }) => {
    const state = get(galleryAtom);
    let tempState = { ...state };

    !state.data.length && set(galleryAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllGallery(page);
      tempState = {
        ...state,
        data,
        currentPage: page,
        error: undefined,
        gallery: undefined,
      };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(galleryAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getGalleryByIdAtom = atom(
  () => null,
  async (get, set, id: number) => {
    const state = get(galleryAtom);
    let tempState = { ...state };

    !state.gallery && set(galleryAtom, { ...state, isLoading: true });

    try {
      const gallery = await serviceGetGalleryById(id);
      tempState = { ...state, gallery };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(galleryAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getGalleryBySlugAtom = atom(
  () => null,
  async (get, set, slug: string) => {
    const state = get(galleryAtom);
    let tempState = { ...state };

    !state.gallery && set(galleryAtom, { ...state, isLoading: true });

    try {
      const gallery = await serviceGetGalleryBySlug(slug);
      tempState = { ...state, gallery };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(galleryAtom, { ...tempState, isLoading: false });
    }
  }
);
