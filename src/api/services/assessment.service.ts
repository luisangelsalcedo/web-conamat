import { AssessmentApi } from '@/types';
import { assessmentApiListToAssessmentList } from '../adapters';
import { getEndpoint } from './serviceEndpoints';
import { config } from '@/config';
import { getTime } from '@/utilities';

export async function serviceGetAllAssessments(page: number = 1) {
  try {
    const response = await fetch(
      getEndpoint('assessments', { page, limit: config.limits.assessment })
    );

    if (response.ok) {
      const data: AssessmentApi[] = await response.json();
      const assessments = assessmentApiListToAssessmentList(data);

      return assessments.toSorted(
        (a, b) => getTime(b.publicationDate) - getTime(a.publicationDate)
      );
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}

export async function serviceGetAssessmentBySlug(slug: string) {
  try {
    const response = await fetch(getEndpoint('assessments', { slug }));
    if (response.ok) {
      const data: AssessmentApi[] = await response.json();
      const assessments = assessmentApiListToAssessmentList(data);
      if (assessments.length <= 0) throw config.errors.PAGENOFOUND;
      return assessments[0];
    }
  } catch (error) {
    throw error;
  }
}
