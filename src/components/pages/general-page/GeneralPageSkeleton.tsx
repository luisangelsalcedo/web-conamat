import { PageLayout } from '@/layouts';
import { Skeleton } from '@mui/material';

export function GenralPageSkeleton() {
  return (
    <PageLayout title='Cargando...' path='/ ...'>
      <PageLayout.Header />
      <PageLayout.Body>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </PageLayout.Body>
    </PageLayout>
  );
}
