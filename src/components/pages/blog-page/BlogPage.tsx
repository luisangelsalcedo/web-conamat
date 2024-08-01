import { useBlogItem } from '@/store/hooks';
import { PageLayout } from '@/layouts';
import { Container } from '@/components/atoms';
import { BlogItemList } from './BlogItemList';
import { useLocation } from 'react-router-dom';

export function BlogPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = query.get('page');

  const { blogItems } = useBlogItem(Number(paramPage ?? 1));

  return (
    <Container>
      {blogItems.isLoading ? (
        'cargando...'
      ) : (
        <PageLayout title='Noticias'>
          <PageLayout.Header />
          <PageLayout.Body>
            <BlogItemList data={blogItems.data} />
          </PageLayout.Body>
        </PageLayout>
      )}
    </Container>
  );
}
