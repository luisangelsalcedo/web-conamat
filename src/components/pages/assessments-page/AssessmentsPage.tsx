import { useAssessments } from '@/store/hooks/useAssessment';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@/components/atoms';
import { PageLayout } from '@/layouts';
import { config } from '@/config';
import { EmptyElements, Paginator } from '@/components/molecules';
import { AssesmentItem } from './AssessmentItem';
import './assessments-page.scss';

export function AssessmentsPage() {
  const { assessments, getAssessments } = useAssessments();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const paramPage = Number(query.get('page') ?? 1);

  useEffect(() => {
    paramPage && getAssessments({ page: paramPage });
  }, [paramPage]);

  return (
    <div className='assesments-page'>
      <Container>
        {assessments.isLoading ? (
          'cargando'
        ) : (
          <PageLayout title='Exámenes' path='/ examenes'>
            <PageLayout.Header />
            <PageLayout.Body>
              {assessments.error &&
              assessments.error === config.errors.EMPTYLIST ? (
                <EmptyElements />
              ) : (
                <>
                  <div className='assessments-page-list'>
                    {assessments.data.map(item => (
                      <AssesmentItem key={item.id} data={item}></AssesmentItem>
                    ))}
                  </div>

                  {
                    <Paginator
                      currentPage={assessments.currentPage}
                      limit={config.limits.assessment}
                      count={assessments.data.length}
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
