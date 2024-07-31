import { useAtom, useSetAtom } from 'jotai';
import { getBlogItemAtom, getBlogItemsAtom, blogItemAtom } from '@/store';

export function useBlogItem() {
  const [blogItems] = useAtom(blogItemAtom);
  const getblogItems = useSetAtom(getBlogItemsAtom);
  const getblogItem = useSetAtom(getBlogItemAtom);

  return { blogItems, getblogItems, getblogItem };
}
