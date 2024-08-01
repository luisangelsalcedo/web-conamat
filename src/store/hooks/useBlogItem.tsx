import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { getBlogItemAtom, getBlogItemsAtom, blogItemAtom } from '@/store';

export function useBlogItem(page: number) {
  const [blogItems] = useAtom(blogItemAtom);
  const getblogItems = useSetAtom(getBlogItemsAtom);
  const getblogItem = useSetAtom(getBlogItemAtom);

  useEffect(() => {
    (!blogItems.data.length || blogItems.currentPage !== page) &&
      getblogItems(page);
  }, [page]);

  return { blogItems, getblogItem, getblogItems };
}
