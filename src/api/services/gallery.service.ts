import { Gallery, GalleryApi } from '@/types';
import {
  galleryApiListToGalleryList,
  galleryApiToGallery,
} from '@/api/adapters';
import { serviceGetMedia } from './media.service';
import { getEndpoint } from './serviceEndpoints';
import { config } from '@/config';
import { getTime } from '@/utilities';

export async function serviceGetAllGallery(page: number = 1) {
  try {
    const response = await fetch(
      getEndpoint('galleries', { page, limit: config.limits.galleries })
    );
    if (response.ok) {
      const data = await response.json();

      const galleries: Gallery[] = await Promise.all(
        data.map(async (item: GalleryApi) => {
          const gallery = galleryApiToGallery(item);
          return uploadGalleryImage(gallery);
        })
      );
      return galleries.toSorted((a, b) => {
        return getTime(b.publicationDate) - getTime(a.publicationDate);
      });
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetGalleryById(id: number) {
  try {
    const response = await fetch(getEndpoint('galleries', { id }));
    if (response.ok) {
      const data: GalleryApi = await response.json();
      const gallery = galleryApiToGallery(data);
      return uploadGalleryImage(gallery);
    }
    throw config.errors.PAGENOFOUND;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetGalleryBySlug(slug: string) {
  try {
    const response = await fetch(getEndpoint('galleries', { slug }));

    if (response.ok) {
      const data: GalleryApi[] = await response.json();
      const galleries = galleryApiListToGalleryList(data);
      if (galleries.length <= 0) throw config.errors.PAGENOFOUND;
      return uploadGalleryImage(galleries[0]);
    }
  } catch (error) {
    throw error;
  }
}

async function uploadGalleryImage(gallery: Gallery) {
  const mediaId = gallery.mediaId;

  if (mediaId) {
    const image = await serviceGetMedia(mediaId);
    gallery.image = image;
  }
  return gallery;
}
