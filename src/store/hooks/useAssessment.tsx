import { useAtom, useSetAtom } from 'jotai';
import {
  assessmentAtom,
  getAssessmentsAtom,
  getAssessmentBySlugAtom,
} from '@/store';

export function useAssessments() {
  const [assessments] = useAtom(assessmentAtom);
  const getAssessments = useSetAtom(getAssessmentsAtom);
  const getAssessmentBySlug = useSetAtom(getAssessmentBySlugAtom);

  return { assessments, getAssessments, getAssessmentBySlug };
}
