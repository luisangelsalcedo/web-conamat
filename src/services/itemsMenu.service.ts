import { ItemMenu } from '@/types';
import { config } from '@/config';
import { ItemMenuApiListToItemMenuList } from '@/adapters';

const endpoint = `${config.apiUrl}/menuitems?_fields=id,name,slug,acf`;

export function serviceGetAllItemMenu() {
  return new Promise<ItemMenu[]>((resolve, reject) => {
    fetch(endpoint)
      .then(response => response.ok && response.json())
      .then(data => resolve(ItemMenuApiListToItemMenuList(data)))
      .catch(error => reject(error));
  });
}
