import type { ItemMenu, ItemMenuApi } from '@/types';

export const itemMenuApiToItemMenu = (data: ItemMenuApi): ItemMenu => ({
  id: data.id,
  label: data.name,
  slug: data.slug,
  href: data.acf.href,
  target: data.acf.target,
  active: data.acf.active,
  sort: data.acf.sort,
  className: data.acf.css_class,
});

export const ItemMenuApiListToItemMenuList = (
  list: ItemMenuApi[]
): ItemMenu[] =>
  list
    .map(item => itemMenuApiToItemMenu(item))
    .filter(item => item.active)
    .toSorted((a, b) => a.sort - b.sort);
