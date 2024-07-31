import { Page } from '@/types';
import { config } from '@/config';
import { pageApiListToPageList } from '@/api/adapters';

const endpoint = `${config.apiUrl}/pages?_fields=id,title,slug,content,excerpt,status,menuitems,menu_order,acf`;

export function serviceGetAllPages() {
  return new Promise<Page[]>((resolve, reject) => {
    fetch(endpoint)
      .then(response => response.ok && response.json())
      .then(data => resolve(pageApiListToPageList(data)))
      .catch(() =>
        reject({
          status: 400,
          message: 'badRequest',
        })
      );
  });
}
