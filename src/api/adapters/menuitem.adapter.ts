import type { MenuItem, MenuItemApi } from '@/types';

export const menuItemApiToMenuItem = (data: MenuItemApi): MenuItem => ({
  id: data.id,
  label: data.name,
  slug: data.slug,
  href: data.acf.href,
  target: data.acf.target,
  active: data.acf.active,
  sort: data.acf.sort,
  className: data.acf.css_class,
});

export const menuItemApiListToMenuItemList = (
  list: MenuItemApi[]
): MenuItem[] =>
  list
    .map(item => menuItemApiToMenuItem(item))
    .filter(item => item.active)
    .toSorted((a, b) => a.sort - b.sort);
