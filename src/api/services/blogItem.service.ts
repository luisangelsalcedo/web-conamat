import { BlogItem, BlogItemApi } from '@/types';
import { blogItemApiToBlogItem } from '../adapters';
import { serviceGetMedia } from './media.service';
import { getEndpoint } from './serviceEndpoints';

export async function serviceGetAllBlogItem(page: number = 1) {
  try {
    const response = await fetch(getEndpoint('posts', { page }));

    if (response.ok) {
      const data = await response.json();

      const blogItems: BlogItem[] = await Promise.all(
        data.map(async (item: BlogItemApi) => {
          const post = blogItemApiToBlogItem(item);
          return uploadBlogItemImage(post);
        })
      );
      return blogItems.toSorted((a, b) => a.sort - b.sort);
    }
    return [];
  } catch (error) {
    throw new Error('badRequest');
  }
}

export async function serviceGetBlogItemById(id: number) {
  try {
    const response = await fetch(getEndpoint('posts', { id }));
    if (response.ok) {
      const data: BlogItemApi = await response.json();
      const post = blogItemApiToBlogItem(data);
      return uploadBlogItemImage(post);
    }
  } catch (error) {
    throw new Error('badRequest');
  }
}

async function uploadBlogItemImage(post: BlogItem) {
  const mediaId = post.mediaId;

  if (mediaId) {
    const image = await serviceGetMedia(mediaId);
    post.image = image;
  }
  return post;
}
