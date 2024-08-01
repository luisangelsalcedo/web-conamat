import { useBlogItem } from '@/store/hooks';
import { PageLayout } from '@/layouts';
import { Container } from '@/components/atoms';
import { BlogItemList } from './BlogItemList';
import { useLocation } from 'react-router-dom';
import { BlogPageSkeleton } from './BlogPageSkeleton';
import './blog-page.scss';

export function BlogPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = query.get('page');

  const { blogItems } = useBlogItem(Number(paramPage ?? 1));

  return (
    <div className='blog-page'>
      <Container>
        {blogItems.isLoading ? (
          <BlogPageSkeleton />
        ) : (
          <PageLayout title='Noticias'>
            <PageLayout.Header />
            <PageLayout.Body>
              <BlogItemList data={blogItems.data} />
            </PageLayout.Body>
          </PageLayout>
        )}
      </Container>
    </div>
  );
}
