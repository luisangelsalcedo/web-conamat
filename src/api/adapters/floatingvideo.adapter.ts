import type { Floatingvideo, FloatingvideoApi } from '@/types';

export const FloatingvideoApiTofloatingvideo = (
  data: FloatingvideoApi
): Floatingvideo => ({
  id: data.id,
  href: `https://www.youtube-nocookie.com/embed/${data.acf.id_youttube_video}?autoplay=1&mute=1&rel=0`,
});

export const FloatingvideoApiListTofloatingvideoList = (
  list: FloatingvideoApi[]
): Floatingvideo[] => list.map(item => FloatingvideoApiTofloatingvideo(item));
