import { PageLayout } from '@/layouts';
import { Skeleton } from '@mui/material';

export function BlogsPageDetailsSkeleton() {
  return (
    <PageLayout title='Cargando...' path='/ ...'>
      <PageLayout.Header />
      <PageLayout.Body>
        <div className='skeleton'>
          <Skeleton variant='rounded' className='skeleton-title' />
          <Skeleton variant='rounded' className='skeleton-date' />
          {/* <Skeleton variant='rounded' className='skeleton-image' /> */}
          <div className='skeleton-content'>
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <br />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <br />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <Skeleton variant='rounded' />
            <br />
          </div>
        </div>
      </PageLayout.Body>
    </PageLayout>
  );
}
