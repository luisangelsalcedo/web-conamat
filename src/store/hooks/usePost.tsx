import { useAtom, useSetAtom } from 'jotai';
import { getPostAtom, getPostsAtom, postAtom } from '@/store';

export function usePost() {
  const [posts] = useAtom(postAtom);
  const getPosts = useSetAtom(getPostsAtom);
  const getPost = useSetAtom(getPostAtom);

  return { posts, getPost, getPosts };
}
