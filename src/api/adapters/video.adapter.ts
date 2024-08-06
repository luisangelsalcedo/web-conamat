import type { VideoApi, Video, Media } from '@/types';

export const videoApiToVideo = (data: VideoApi): Video => ({
  id: data.id,
  title: data.title.rendered,
  videoID: data.acf.id_youttube_video,
  sort: data.acf.sort,
  publicationDate: data.acf.publication_date,
  className: data.acf.css_class,
  highlight: data.acf.highlight,
  href: `https://www.youtube.com/watch?v=${data.acf.id_youttube_video}`,
  embed: `https://www.youtube.com/embed/${data.acf.id_youttube_video}`,
  image: yotubeImage(data.acf.id_youttube_video),
});

export const videoApiListToVideoList = (list: VideoApi[]): Video[] =>
  list.map(item => videoApiToVideo(item)).toSorted((a, b) => a.sort - b.sort);

const yotubeImage = (id: string): Media => ({
  id,
  src: `http://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  title: 'image-youtube',
  slug: 'image-youtube',
  sizes: {
    thumbnail: {
      source_url: `http://img.youtube.com/vi/${id}/default.jpg`,
    },
    medium: {
      source_url: `http://img.youtube.com/vi/${id}/mqdefault.jpg`,
    },
    large: { source_url: `http://img.youtube.com/vi/${id}/hqdefault.jpg` },
    medium_large: {
      source_url: `http://img.youtube.com/vi/${id}/sddefault.jpg`,
    },
    full: { source_url: `http://img.youtube.com/vi/${id}/maxresdefault.jpg` },
  },
});
