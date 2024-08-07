import { useAtom, useSetAtom } from 'jotai';
import {
  galleryAtom,
  getGalleriesAtom,
  getGalleryByIdAtom,
  getGalleryBySlugAtom,
} from '@/store';

export function useGallery() {
  const [galleries] = useAtom(galleryAtom);
  const getGalleries = useSetAtom(getGalleriesAtom);
  const getGalleryById = useSetAtom(getGalleryByIdAtom);
  const getGalleryBySlug = useSetAtom(getGalleryBySlugAtom);

  return { galleries, getGalleries, getGalleryById, getGalleryBySlug };
}
