import { PageLayout } from '@/layouts';
import { Skeleton } from '@mui/material';

export function BlogPageSkeleton() {
  const num = 10;
  const arr = new Array(num).fill('');
  return (
    <PageLayout title='Cargando...' path='/ ...'>
      <PageLayout.Header />
      <PageLayout.Body>
        <div className='skeleton'>
          <div className='skeleton-list'>
            {arr.map((item, i) => (
              <div key={String(i)} className='skeleton-item'>
                {item}
                <Skeleton variant='rounded' className='skeleton-item-image' />
                <div className='skeleton-item-content'>
                  <Skeleton
                    variant='rounded'
                    className='skeleton-item-content-title'
                  />
                  <div className='skeleton-item-content-text'>
                    <Skeleton variant='rounded' />
                    <Skeleton variant='rounded' />
                    <Skeleton variant='rounded' />
                    <Skeleton variant='rounded' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout.Body>
    </PageLayout>
  );
}
