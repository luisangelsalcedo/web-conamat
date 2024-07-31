import { MenuItem } from '@/types';
import { MenuItemApiListToMenuItemList } from '@/api/adapters';
import { endpoints } from './serviceEndpoints';

export function serviceGetAllMenuItem() {
  return new Promise<MenuItem[]>((resolve, reject) => {
    fetch(endpoints.menuItems.GETALL)
      .then(response => response.ok && response.json())
      .then(data => resolve(MenuItemApiListToMenuItemList(data)))
      .catch(() =>
        reject({
          status: 400,
          message: 'badRequest',
        })
      );
  });
}
