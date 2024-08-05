import type { Post, PostApi } from '@/types';

export const postApiToPost = (data: PostApi): Post => ({
  id: data.id,
  slug: data.slug,
  title: data.title.rendered,
  mediaId: data.acf.main_image,
  content: data.content.rendered,
  excerpt: data.excerpt.rendered,
  sort: data.acf.sort,
  publicationDate: data.acf.publication_date,
  className: data.acf.css_class,
  highlight: data.acf.highlight,
  href: `blog/${data.id}/${data.slug}`,
});

export const postApiListToPostList = (list: PostApi[]): Post[] =>
  list.map(item => postApiToPost(item)).toSorted((a, b) => a.sort - b.sort);
