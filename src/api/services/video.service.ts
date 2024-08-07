import { VideoApi } from '@/types';
import { getEndpoint } from './serviceEndpoints';
import { videoApiListToVideoList } from '@/api/adapters';
import { config } from '@/config';

export async function serviceGetAllVideos(
  page: number = 1,
  limit: number = config.limits.videos
) {
  try {
    const response = await fetch(getEndpoint('videos', { page, limit }));
    if (response.ok) {
      const data: VideoApi[] = await response.json();
      const videos = videoApiListToVideoList(data);
      return videos.toSorted((a, b) => a.sort - b.sort);
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}
