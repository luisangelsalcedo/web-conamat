import { useNavigate, useParams } from 'react-router-dom';
import htmlParser, { HTMLReactParserOptions, Element } from 'html-react-parser';
import { useEffect } from 'react';
import { useGallery } from '@/store/hooks';
import { PageLayout } from '@/layouts';
import { Container, Date } from '@/components/atoms';
import { MagicImage } from '@/components/molecules';
import { ZoonBackIcon } from '@/assets/svgs';
import { GalleriesPageDetailSkeleton } from './GalleriesPageDetailSkeleton';
import { config } from '@/config';
import './galleries-page-detail.scss';

export function GalleriesPageDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { galleries, getGalleryBySlug } = useGallery();

  useEffect(() => {
    slug && getGalleryBySlug(slug ?? '');
  }, [slug]);

  useEffect(() => {
    galleries.error && navigate(config.nofoundUrl, { replace: false });
  }, [galleries]);

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        if (!domNode.attribs) return;
        if (domNode.attribs.loading === 'lazy') {
          const image = domNode.attribs.src.replace(
            'https://www.conamat.edu.pe/api/wp-content/uploads/',
            'https://files.conamat.edu.pe/'
          );

          return (
            // <a href={domNode.attribs.src} data-fancybox='gallery'>
            //   <img src={domNode.attribs.src} alt='' />
            // </a>
            <MagicImage
              src={domNode.attribs.src}
              to={image}
              gallery={galleries.gallery?.slug}
              icon={<ZoonBackIcon />}
            />
          );
        }
      }
    },
  };

  return (
    <div className='galleries-page-detail'>
      <Container>
        {galleries.isLoading ? (
          <GalleriesPageDetailSkeleton />
        ) : (
          <PageLayout title='Galería' path={`/ ${galleries.gallery?.slug}`}>
            <PageLayout.Header />
            <PageLayout.Body>
              <h1 className='title'>{galleries.gallery?.title ?? ''}</h1>
              <Date date={galleries.gallery?.publicationDate} />
              <div className='galleries-page-detail-content'>
                {htmlParser(galleries.gallery?.content ?? '', options)}
              </div>
            </PageLayout.Body>
          </PageLayout>
        )}
      </Container>
    </div>
  );
}
