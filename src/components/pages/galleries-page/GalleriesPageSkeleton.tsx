import { PageLayout } from '@/layouts';
import { Skeleton } from '@mui/material';

export function GalleriesPageSkeleton() {
  return (
    <PageLayout title='Cargando...' path='/ ...'>
      <PageLayout.Header />
      <PageLayout.Body>
        <div className='skeleton'>
          <Skeleton variant='rounded' />
          <Skeleton variant='rounded' />
          <Skeleton variant='rounded' />
        </div>
      </PageLayout.Body>
    </PageLayout>
  );
}
