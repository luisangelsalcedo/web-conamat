import { MenuItemApi, MenuItemsWithPages, Page, PagesGroups } from '@/types';
import { menuItemApiListToMenuItemList } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';
import { serviceGetAllPages } from './page.service';
import { config } from '@/config';

export async function serviceGetAllMenuItem() {
  try {
    const response = await fetch(getEndpoint('menuitems'));
    if (response.ok) {
      const data: MenuItemApi[] = await response.json();
      const menuItems = menuItemApiListToMenuItemList(data);
      return menuItems;
    }
    return [];
  } catch (error) {
    throw error;
  }
}

export async function serviceGetMenuItemBySlug(slug: string) {
  try {
    const response = await fetch(getEndpoint('menuitems', { slug }));

    if (response.ok) {
      const data: MenuItemApi[] = await response.json();
      const pages = menuItemApiListToMenuItemList(data);
      if (pages.length <= 0) throw config.errors.PAGENOFOUND;
      return pages[0];
    }
  } catch (error) {
    throw error;
  }
}

export async function serviceGetAllMenuItemsWithPage(): Promise<
  MenuItemsWithPages[]
> {
  try {
    const menuItems = await serviceGetAllMenuItem();
    const pages = await serviceGetAllPages();

    // pages group by menuItems
    const pagesGroups: PagesGroups = pages.reduce(
      (prev: PagesGroups, current: Page) => {
        const { menuitem } = current;
        return {
          ...prev,

          [String(menuitem)]: prev[String(menuitem)]
            ? [...prev[String(menuitem)], current]
            : [current],
        };
      },
      {}
    );

    return menuItems.map(item => ({
      menu: item,
      submenu: pagesGroups[item.id] || [],
    }));
  } catch (error) {
    throw error;
  }
}
