import type { Page, PageApi } from '@/types';

export const pageApiToPage = (data: PageApi): Page => ({
  id: data.id,
  title: data.title.rendered,
  slug: data.slug,
  content: data.content.rendered,
  excerpt: data.excerpt.rendered,
  status: data.status,
  menuitem: data.menuitems,
  sort: data.menu_order,
  className: data.acf.css_class,
  href: data.acf.href,
  target: data.acf.target,
});
export const pageApiListToPageList = (list: PageApi[]): Page[] =>
  list
    .map(item => pageApiToPage(item))
    .filter(item => item.status === 'publish')
    .toSorted((a, b) => a.sort - b.sort);
