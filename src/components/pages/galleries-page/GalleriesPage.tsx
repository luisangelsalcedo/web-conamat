import { useEffect } from 'react';
import './galleries-page.scss';
import { useLocation } from 'react-router-dom';
import { useGallery } from '@/store/hooks';
import { EmptyElements, MagicImage, Paginator } from '@/components/molecules';
import { CamIcon } from '@/assets/svgs';
import { Container } from '@/components/atoms';
import { PageLayout } from '@/layouts';
import { config } from '@/config';
import './galleries-page.scss';

export function GalleriesPage() {
  const { galleries, getGalleries } = useGallery();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = Number(query.get('page') ?? 1);

  useEffect(() => {
    getGalleries({ page: paramPage });
  }, [paramPage]);

  return (
    <div className='galleries-page'>
      <Container>
        {galleries.isLoading ? (
          'cargando...'
        ) : (
          <PageLayout title='Galerías' path='/ galerías'>
            <PageLayout.Header />
            <PageLayout.Body>
              {galleries.error &&
              galleries.error === config.errors.EMPTYLIST ? (
                <EmptyElements />
              ) : (
                <div className='galleries-page-list'>
                  {galleries.data.map(gallery => (
                    <MagicImage
                      src={gallery.image?.sizes?.full?.source_url}
                      to={gallery.href}
                      key={gallery.id}
                      title={gallery.title}
                      showTitle
                      border
                      icon={<CamIcon />}
                    />
                  ))}
                  {
                    <Paginator
                      currentPage={galleries.currentPage}
                      limit={config.limits.galleries}
                      count={galleries.data.length}
                    ></Paginator>
                  }
                </div>
              )}
            </PageLayout.Body>
          </PageLayout>
        )}
      </Container>
    </div>
  );
}
