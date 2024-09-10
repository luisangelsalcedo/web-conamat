import { Slider, SliderApi } from '@/types';
import { sliderApiToSlider } from '@/api/adapters';
import { serviceGetMedia } from './media.service';
import { getEndpoint } from './serviceEndpoints';

export async function serviceGetAllSliders() {
  try {
    const response = await fetch(getEndpoint('sliders'));

    if (response.ok) {
      const data: SliderApi[] = await response.json();
      const sliders: Slider[] = await Promise.all(
        data.map(async (item: SliderApi) => {
          const slider = sliderApiToSlider(item);
          const sliderWithImages = await uploadSliderImage(slider);
          return sliderWithImages;
        })
      );

      return sliders.toSorted((a, b) => a.sort - b.sort);
    }
    return [];
  } catch (error) {
    throw error;
  }
}

async function uploadSliderImage(slider: Slider) {
  const mediaId = slider.mediaId;
  const mediaIdMobile = slider.mediaIdMobile;

  if (mediaId) {
    const image = await serviceGetMedia(mediaId);
    slider.image = image;
  }
  if (mediaIdMobile) {
    const mobileImage = await serviceGetMedia(mediaIdMobile);
    slider.mobileImage = mobileImage;
  }
  return slider;
}
