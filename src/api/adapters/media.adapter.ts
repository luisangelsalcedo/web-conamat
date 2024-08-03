import type { Media, MediaApi } from '@/types';

export const mediaApiToMedia = (data: MediaApi): Media => ({
  id: data.id,
  slug: data.slug,
  src: data.guid.rendered,
  title: data.title.rendered,
  sizes: data.media_details.sizes,
});
