import { Skeleton } from '@mui/material';
export function StickyPostsBlockSkeleton() {
  return (
    <div className='skeleton'>
      <Skeleton variant='rounded' className='skeleton-main' />
      <div className='skeleton-items'>
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
      </div>
    </div>
  );
}
