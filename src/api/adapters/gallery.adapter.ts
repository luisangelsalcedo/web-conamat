import { config } from '@/config';
import type { GalleryApi, Gallery } from '@/types';

export const galleryApiToGallery = (data: GalleryApi): Gallery => ({
  id: data.id,
  slug: data.slug,
  title: data.title.rendered,
  sort: data.acf.sort,
  publicationDate: data.acf.publication_date,
  className: data.acf.css_class,
  mediaId: data.acf.main_image,
  content: data.content.rendered,
  href: `${config.baseUrl}galerias/${data.slug}`,
});

export const galleryApiListToGalleryList = (list: GalleryApi[]): Gallery[] =>
  list
    .map(item => galleryApiToGallery(item))
    .toSorted((a, b) => {
      console.log({ a, b });
      return (
        new Date(a.publicationDate).getTime() -
        new Date(b.publicationDate).getTime()
      );
    });
