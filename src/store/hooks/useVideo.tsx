import { useAtom, useSetAtom } from 'jotai';
import { videoAtom, getVideosAtom } from '@/store';

export function useVideo() {
  const [videos] = useAtom(videoAtom);
  const getVideos = useSetAtom(getVideosAtom);

  return { videos, getVideos };
}
