import type { BlogItem, BlogItemApi } from '@/types';

export const blogItemApiToBlogItem = (data: BlogItemApi): BlogItem => ({
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
});

export const blogItemApiListToBlogItemList = (
  list: BlogItemApi[]
): BlogItem[] =>
  list
    .map(item => blogItemApiToBlogItem(item))
    .toSorted((a, b) => a.sort - b.sort);
