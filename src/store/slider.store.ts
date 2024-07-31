import { atom } from 'jotai';
import { Slider } from '@/types';
import { serviceGetAllSliders } from '@/api/services';

interface SliderState {
  data: Slider[];
  isLoading: boolean;
  error?: any;
}
const slidersInit: SliderState = {
  data: [],
  isLoading: true,
};

export const slidersAtom = atom(slidersInit);
export const getSlidersAtom = atom(
  () => null,
  async (get, set) => {
    const state = get(slidersAtom);
    let tempState = { ...state };

    try {
      const data = await serviceGetAllSliders();
      tempState = { ...state, data };
    } catch (error) {
      tempState = { ...state, error };
    } finally {
      set(slidersAtom, { ...tempState, isLoading: false });
    }
  }
);
