import { MenuItem } from '@/types';
import { config } from '@/config';
import { MenuItemApiListToMenuItemList } from '@/adapters';

const endpoint = `${config.apiUrl}/menuitems?_fields=id,name,slug,acf`;

export function serviceGetAllMenuItem() {
  return new Promise<MenuItem[]>((resolve, reject) => {
    fetch(endpoint)
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
