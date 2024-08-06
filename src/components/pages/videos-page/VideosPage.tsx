import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '@/layouts';
import { Container } from '@/components/atoms';
import { EmptyElements, MagicImage, Paginator } from '@/components/molecules';
// import { BlogPageSkeleton } from './BlogPageSkeleton';
import { config } from '@/config';
import { useVideo } from '@/store/hooks';
import './videos-page.scss';
import { PlayIcon } from '@/assets/svgs';

export function VideosPage() {
  const { videos, getVideos } = useVideo();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = Number(query.get('page') ?? 1);

  useEffect(() => {
    paramPage && getVideos({ page: paramPage });
  }, [paramPage]);

  return (
    <div className='videos-page'>
      <Container>
        {videos.isLoading ? (
          <>Cargando ...</>
        ) : (
          <PageLayout title='Videos' path='/ videos'>
            <PageLayout.Header />
            <PageLayout.Body>
              {videos.error && videos.error === config.errors.EMPTYLIST ? (
                <EmptyElements />
              ) : (
                <>
                  <div className='videos-page-list'>
                    {videos.data.map(video => (
                      <MagicImage
                        src={video.image?.sizes.medium?.source_url}
                        to={video.embed}
                        key={video.id}
                        gallery='videos'
                        title={video.title}
                        positionTitle='bottom'
                        showTitle
                        icon={<PlayIcon />}
                      />
                    ))}
                  </div>

                  {
                    <Paginator
                      currentPage={videos.currentPage}
                      limit={config.limits.videos}
                      count={videos.data.length}
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
