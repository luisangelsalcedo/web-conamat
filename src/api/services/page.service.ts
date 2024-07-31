import { Page } from '@/types';
import { pageApiListToPageList } from '@/api/adapters';
import { endpoints } from './serviceEndpoints';

export function serviceGetAllPages() {
  return new Promise<Page[]>((resolve, reject) => {
    fetch(endpoints.page.GETALL)
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
