import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePost } from '@/store/hooks';
import { PageLayout } from '@/layouts';
import { Container } from '@/components/atoms';
import { EmptyElements, Paginator, PostMedium } from '@/components/molecules';
import { BlogPageSkeleton } from './BlogPageSkeleton';
import './blog-page.scss';
import { config } from '@/config';

export function BlogPage() {
  const { posts, getPosts } = usePost();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = Number(query.get('page') ?? 1);

  useEffect(() => {
    paramPage && getPosts({ page: paramPage });
  }, [paramPage]);

  return (
    <div className='blog-page'>
      <Container>
        {posts.isLoading ? (
          <BlogPageSkeleton />
        ) : (
          <PageLayout title='Noticias' path='/ noticias'>
            <PageLayout.Header />
            <PageLayout.Body>
              {posts.error && posts.error === config.errors.EMPTYLIST ? (
                <EmptyElements />
              ) : (
                <>
                  {posts.data.map(item => (
                    <PostMedium post={item} key={item.id} />
                  ))}
                  {
                    <Paginator
                      currentPage={posts.currentPage}
                      limit={config.limits.posts}
                      count={posts.data.length}
                    ></Paginator>
                  }
                </>
              )}
            </PageLayout.Body>
          </PageLayout>
        )}
      </Container>
    </div>
  );
}
