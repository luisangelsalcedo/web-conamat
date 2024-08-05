import { usePost } from '@/store/hooks';
import { useEffect } from 'react';
import './sticky-posts-block.scss';
import { PostSmall } from '../post-small/PostSmall';
import { PostsSlider } from '../posts-slider/PostsSlider';
import { StickyPostsBlockSkeleton } from './StickyPostsBlockSkeleton';

export function StickyPostsBlock() {
  const { posts, getPosts } = usePost();

  useEffect(() => {
    getPosts(1, { sticky: true });
  }, []);

  const hightlightStickyPosts = posts.data.filter(post => post.highlight);
  const othersStickyPosts = posts.data.filter(post => !post.highlight);

  return (
    <div className='sticky-posts-block'>
      {posts.isLoading ? (
        <StickyPostsBlockSkeleton />
      ) : (
        <>
          <div>
            <PostsSlider posts={hightlightStickyPosts} />
          </div>
          <div>
            {othersStickyPosts.map(post => (
              <PostSmall post={post} key={post.id} to={post.href} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
