import { config } from '@/config';
import type { Assessment, AssessmentApi } from '@/types';

export const assessmentApiToAssessment = (data: AssessmentApi): Assessment => ({
  id: data.id,
  slug: data.slug,
  title: data.title.rendered,
  content: data.content.rendered,
  publicationDate: data.acf.publication_date,
  className: data.acf.css_class,
  sort: data.acf.sort,
  href: `${config.baseUrl}examenes/${data.slug}`,
});

export const assessmentApiListToAssessmentList = (
  list: AssessmentApi[]
): Assessment[] => list.map(item => assessmentApiToAssessment(item));
