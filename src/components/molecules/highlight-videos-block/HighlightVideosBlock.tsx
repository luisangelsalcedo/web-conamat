import { useVideo } from '@/store/hooks';
import { useEffect } from 'react';
import { MagicImage } from '../magic-image/MagicImage';
import { PlayIcon } from '@/assets/svgs';
import './highlight-videos-block.scss';
import { HighlightVideosBlockSkeleton } from './HighlightVideosBlockSkeleton';

export function HighlightVideosBlock() {
  const { videos, getVideos } = useVideo();

  useEffect(() => {
    getVideos({ page: 1, limit: 100 });
  }, []);
  return (
    <div className='highlight-videos-block'>
      {videos.isLoading ? (
        <HighlightVideosBlockSkeleton />
      ) : (
        <>
          {videos.data
            .filter(video => video.highlight)
            .map(video => (
              <MagicImage
                src={video.image?.sizes.medium?.source_url}
                to={video.embed}
                gallery='higlight-videos'
                icon={<PlayIcon />}
                title={video.title}
                showTitle
                positionTitle='bottom'
              />
            ))}
        </>
      )}
    </div>
  );
}
