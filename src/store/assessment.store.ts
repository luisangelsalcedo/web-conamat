import {
  serviceGetAllAssessments,
  serviceGetAssessmentBySlug,
} from '@/api/services';
import { Assessment } from '@/types';
import { atom } from 'jotai';

interface AssessmentState {
  data: Assessment[];
  currentPage: number;
  assessment?: Assessment;
  isLoading: boolean;
  error?: any;
}
const assessmentInit: AssessmentState = {
  data: [],
  isLoading: false,
  currentPage: 1,
};

export const assessmentAtom = atom(assessmentInit);
export const getAssessmentsAtom = atom(
  () => null,
  async (get, set, { page = 1 }: { page: number }) => {
    const state = get(assessmentAtom);
    let tempState = { ...state };

    !state.data.length && set(assessmentAtom, { ...state, isLoading: true });

    try {
      const data = await serviceGetAllAssessments(page);
      tempState = {
        ...state,
        data,
        currentPage: page,
        error: undefined,
      };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(assessmentAtom, { ...tempState, isLoading: false });
    }
  }
);

export const getAssessmentBySlugAtom = atom(
  () => null,
  async (get, set, slug: string) => {
    const state = get(assessmentAtom);
    let tempState = { ...state };

    !state.assessment && set(assessmentAtom, { ...state, isLoading: true });

    try {
      const assessment = await serviceGetAssessmentBySlug(slug);
      tempState = { ...state, assessment };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(assessmentAtom, { ...tempState, isLoading: false });
    }
  }
);
