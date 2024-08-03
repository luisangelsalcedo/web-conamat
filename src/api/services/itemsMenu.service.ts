import { MenuItemApi } from '@/types';
import { menuItemApiListToMenuItemList } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';

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

// export async function serciveGetBySlug(slug: string) {
//   try {
//     fetch(endpoints.menuItems.)
//   } catch (error) {

//   }
// }
