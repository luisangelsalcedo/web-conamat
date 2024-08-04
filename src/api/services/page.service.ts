import { PageApi } from '@/types';
import { pageApiListToPageList, pageApiToPage } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';
import { config } from '@/config';

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
    throw error;
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
    throw error;
  }
}

export async function serviceGetPageBySlug(slug: string) {
  try {
    const response = await fetch(getEndpoint('pages', { slug }));

    if (response.ok) {
      const data: PageApi[] = await response.json();
      const pages = pageApiListToPageList(data);
      if (pages.length <= 0) throw config.errors.PAGENOFOUND;
      return pages[0];
    }
  } catch (error) {
    throw error;
  }
}
