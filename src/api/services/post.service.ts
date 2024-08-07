import { Post, PostApi } from '@/types';
import { postApiListToPostList, postApiToPost } from '../adapters';
import { serviceGetMedia } from './media.service';
import { getEndpoint } from './serviceEndpoints';
import { config } from '@/config';
import { getTime } from '@/utilities';

export async function serviceGetAllPost(page: number = 1) {
  try {
    const response = await fetch(
      getEndpoint('posts', { page, limit: config.limits.posts })
    );
    if (response.ok) {
      const data = await response.json();

      const posts: Post[] = await Promise.all(
        data.map(async (item: PostApi) => {
          const post = postApiToPost(item);
          return uploadPostImage(post);
        })
      );
      return posts.toSorted(
        (a, b) => getTime(b.publicationDate) - getTime(a.publicationDate)
      );
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetAllPostSticky() {
  try {
    const response = await fetch(
      getEndpoint('posts', { limit: 100, sticky: true })
    );
    if (response.ok) {
      const data = await response.json();

      const posts: Post[] = await Promise.all(
        data.map(async (item: PostApi) => {
          const post = postApiToPost(item);
          return uploadPostImage(post);
        })
      );
      return posts.toSorted(
        (a, b) => getTime(b.publicationDate) - getTime(a.publicationDate)
      );
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetPostById(id: number) {
  try {
    const response = await fetch(getEndpoint('posts', { id }));
    if (response.ok) {
      const data: PostApi = await response.json();
      const post = postApiToPost(data);
      return uploadPostImage(post);
    }
    throw config.errors.PAGENOFOUND;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetPostBySlug(slug: string) {
  try {
    const response = await fetch(getEndpoint('posts', { slug }));

    if (response.ok) {
      const data: PostApi[] = await response.json();
      const posts = postApiListToPostList(data);
      if (posts.length <= 0) throw config.errors.PAGENOFOUND;
      return uploadPostImage(posts[0]);
    }
  } catch (error) {
    throw error;
  }
}

// * Temp function
export async function serviceGetPostByIdAndSlug(id: number, slug: string) {
  try {
    const response = await fetch(getEndpoint('posts', { id }));
    if (response.ok) {
      const data: PostApi = await response.json();
      const post = postApiToPost(data);

      // * validate slug
      if (post.slug !== slug) throw config.errors.PAGENOFOUND;

      return uploadPostImage(post);
    }
    throw config.errors.PAGENOFOUND;
  } catch (error) {
    throw error;
  }
}

async function uploadPostImage(post: Post) {
  const mediaId = post.mediaId;

  if (mediaId) {
    const image = await serviceGetMedia(mediaId);
    post.image = image;
  }
  return post;
}
