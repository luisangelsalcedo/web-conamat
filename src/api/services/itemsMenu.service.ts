import { MenuItemApi, Page, PagesGroups } from '@/types';
import { menuItemApiListToMenuItemList } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';
import { serviceGetAllPages } from './page.service';

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
    throw new Error('badRequest');
  }
}

export async function serviceGetAllMenuItemsWithPage() {
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
    throw new Error('error');
  }
}
