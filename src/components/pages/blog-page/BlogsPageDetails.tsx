import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { usePost } from '@/store/hooks';
import { Container, Date } from '@/components/atoms';
import { PageLayout } from '@/layouts';
import { config } from '@/config';
import { BlogsPageDetailsSkeleton } from './BlogsPageDetailsSkeleton';
import './blog-page-details.scss';

export function BlogPageDetail() {
  const { id, slug } = useParams();
  const { posts, getPostByIdAndSlug } = usePost();
  const navigate = useNavigate();

  useEffect(() => {
    !!id && !!slug && getPostByIdAndSlug(Number(id), slug);
  }, [id, slug]);

  useEffect(() => {
    posts.error && navigate(config.nofoundUrl, { replace: false });
  }, [posts]);

  return (
    <div className='blog-page-details'>
      <Container>
        {posts.isLoading ? (
          <BlogsPageDetailsSkeleton />
        ) : (
          <PageLayout title='Noticias'>
            <PageLayout.Header />
            <PageLayout.Body>
              {!!posts.post && (
                <>
                  <h1 className='title'>{posts.post?.title}</h1>
                  {!!posts.post?.publicationDate && (
                    <Date date={posts.post?.publicationDate ?? ''}></Date>
                  )}

                  {posts.post?.image && (
                    <img
                      src={posts.post?.image?.sizes.full?.source_url}
                      alt={posts.post?.title}
                      width='100%'
                      className='blog-page-details-image'
                    />
                  )}
                  <div className='blog-page-details-content'>
                    {parse(posts.post?.content ?? '')}
                  </div>
                </>
              )}
            </PageLayout.Body>
          </PageLayout>
        )}
      </Container>
    </div>
  );
}
