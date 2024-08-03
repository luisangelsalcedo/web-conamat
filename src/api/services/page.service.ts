import { PageApi } from '@/types';
import { pageApiListToPageList, pageApiToPage } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';

export async function serviceGetAllPages() {
  try {
    const response = await fetch(getEndpoint('pages'));
    if (response.ok) {
      const data: PageApi[] = await response.json();
      const pages = pageApiListToPageList(data);
      return pages.toSorted((a, b) => a.sort - b.sort);
    }
    return [];
  } catch (error) {
    throw new Error('badRequest');
  }
}

export async function serviceGetPageById(id: number) {
  try {
    const response = await fetch(getEndpoint('pages', { id }));

    if (response.ok) {
      const data: PageApi = await response.json();
      const page = pageApiToPage(data);
      return page;
    }
  } catch (error) {
    throw new Error('badRequest');
  }
}

console.log(getEndpoint('pages'));
