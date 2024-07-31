import type { Slider, SliderApi } from '@/types';

export const sliderApiToSlider = (data: SliderApi): Slider => ({
  id: data.id,
  title: data.title.rendered,
  status: data.status,
  href: data.acf.href,
  target: data.acf.target,
  sort: data.acf.sort,
  mediaId: data.acf.full_image,
  mediaIdMobile: data.acf.mobile_image,
});

export const sliderApiListToSliderList = (list: SliderApi[]): Slider[] =>
  list
    .map(item => sliderApiToSlider(item))
    .filter(item => item.status === 'publish')
    .toSorted((a, b) => a.sort - b.sort);
