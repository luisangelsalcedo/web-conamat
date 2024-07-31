import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { getSlidersAtom, slidersAtom } from '@/store';

export function useSlider() {
  const [sliders] = useAtom(slidersAtom);
  const getSliders = useSetAtom(getSlidersAtom);

  useEffect(() => {
    !sliders.data.length && getSliders();
  }, []);

  return { sliders };
}
