import type { Slider, SliderApi } from '@/types';

export const sliderApiToSlider = (data: SliderApi): Slider => ({
  id: data.id,
  slug: data.slug,
  title: data.title.rendered,
  href: data.acf.href,
  target: data.acf.target,
  sort: data.acf.sort,
  mediaId: data.acf.full_image,
  mediaIdMobile: data.acf.mobile_image,
});

export const sliderApiListToSliderList = (list: SliderApi[]): Slider[] =>
  list.map(item => sliderApiToSlider(item)).toSorted((a, b) => a.sort - b.sort);
