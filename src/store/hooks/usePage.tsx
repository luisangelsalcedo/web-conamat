import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { getPagesAtom, pagesAtom } from '@/store';

export function usePages() {
  const [pages] = useAtom(pagesAtom);
  const getPages = useSetAtom(getPagesAtom);

  useEffect(() => {
    !pages.data.length && getPages();
  }, []);

  return { pages };
}
