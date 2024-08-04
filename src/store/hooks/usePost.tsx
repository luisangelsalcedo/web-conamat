import { useAtom, useSetAtom } from 'jotai';
import {
  postAtom,
  getPostsAtom,
  getPostByIdAtom,
  getPostBySlugAtom,
  getPostByIdAndSlugAtom,
} from '@/store';

export function usePost() {
  const [posts] = useAtom(postAtom);
  const getPosts = useSetAtom(getPostsAtom);
  const getPostById = useSetAtom(getPostByIdAtom);
  const getPostBySlug = useSetAtom(getPostBySlugAtom);
  const getPostByIdAndSlug = useSetAtom(getPostByIdAndSlugAtom);

  return { posts, getPosts, getPostById, getPostBySlug, getPostByIdAndSlug };
}
