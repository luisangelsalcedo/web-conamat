import { Slider, SliderApi } from '@/types';
import { config } from '@/config';
import { sliderApiToSlider } from '@/adapters';
import { serviceGetMedia } from './Media.service';

const endpoint = `${config.apiUrl}/sliders?_fields=id,title,featured_media,status,acf`;

export async function serviceGetAllSliders() {
  try {
    const response = await fetch(endpoint);
    const data: SliderApi[] = await response.json();

    const sliders: Slider[] = await Promise.all(
      data.map(async (item: SliderApi) => {
        const slider = sliderApiToSlider(item);

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
      })
    );
    return sliders.toSorted((a, b) => a.sort - b.sort);
  } catch (error) {
    throw new Error('badRequest');
  }
}
