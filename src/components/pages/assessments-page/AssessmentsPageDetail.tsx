import { useNavigate, useParams } from 'react-router-dom';
import htmlParse from 'html-react-parser';
import { PageLayout } from '@/layouts';
import { useAssessments } from '@/store/hooks';
import { Container, Date } from '@/components/atoms';
import { useEffect } from 'react';
import './assessments-page-detail.scss';
import { config } from '@/config';

export function AssessmentsPageDetail() {
  const { assessments, getAssessmentBySlug } = useAssessments();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    slug && getAssessmentBySlug(slug);
  }, [slug]);

  useEffect(() => {
    assessments.error && navigate(config.nofoundUrl, { replace: false });
  }, [assessments]);

  return (
    <div>
      <Container>
        <PageLayout
          title='Exámenes'
          path={`/ exámenes / ${slug}`}
          className='general-post'
          loading={assessments.isLoading}
        >
          <PageLayout.Header />
          <PageLayout.Body>
            <>
              {assessments.isLoading ? (
                'cargando...'
              ) : (
                <>
                  <h1 className='title'>{assessments.assessment?.title}</h1>
                  {!!assessments.assessment?.publicationDate && (
                    <Date>
                      {assessments.assessment?.publicationDate.slice(0, 4) ??
                        ''}
                    </Date>
                  )}

                  <div className='general-post-content'>
                    {htmlParse(assessments.assessment?.content ?? '')}
                  </div>
                </>
              )}
            </>
          </PageLayout.Body>
        </PageLayout>
      </Container>
    </div>
  );
}
