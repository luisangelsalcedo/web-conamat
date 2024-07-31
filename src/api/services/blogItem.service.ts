import { BlogItem, BlogItemApi } from '@/types';
import { blogItemApiToBlogItem } from '../adapters';
import { serviceGetMedia } from './media.service';
import { endpoints } from './serviceEndpoints';

export async function serviceGetAllPost(page: number = 1) {
  try {
    const response = await fetch(endpoints.blogItem.GETALL(page));

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
    const response = await fetch(endpoints.blogItem.GETBYID(id));
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
