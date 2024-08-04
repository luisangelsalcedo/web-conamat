import { useAtom, useSetAtom } from 'jotai';
import {
  pagesAtom,
  getPagesAtom,
  getPageByIdAtom,
  getPageBySlugAtom,
} from '@/store';

export function usePages() {
  const [pages] = useAtom(pagesAtom);
  const getPages = useSetAtom(getPagesAtom);
  const getPageById = useSetAtom(getPageByIdAtom);
  const getPageByIdSlug = useSetAtom(getPageBySlugAtom);

  return { pages, getPages, getPageById, getPageByIdSlug };
}
