import { useAtom, useSetAtom } from 'jotai';
import {
  getPageByIdAtom,
  getPageByIdSlugAtom,
  getPagesAtom,
  pagesAtom,
} from '@/store';

export function usePages() {
  const [pages] = useAtom(pagesAtom);
  const getPages = useSetAtom(getPagesAtom);
  const getPageById = useSetAtom(getPageByIdAtom);
  const getPageByIdSlug = useSetAtom(getPageByIdSlugAtom);

  return { pages, getPages, getPageById, getPageByIdSlug };
}
