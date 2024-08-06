import { Skeleton } from '@mui/material';

export function HighlightVideosBlockSkeleton() {
  return (
    <div className='skeleton'>
      <div className='skeleton-items'>
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
      </div>
    </div>
  );
}
