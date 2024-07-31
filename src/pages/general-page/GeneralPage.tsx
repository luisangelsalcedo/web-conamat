import { Page } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useMenuItem, usePages } from '@/hooks';
import { GenralPageSkeleton } from './GeneralPageSkeleton';
import { PageLayout } from '@/layout';
import { Container } from '@/components/atoms';
import { config } from '@/config';

export function GeneralPage() {
  const { menuSlug, pageSlug } = useParams();
  const navigate = useNavigate();

  const { menuItems } = useMenuItem();
  const { pages } = usePages();

  const [page, setPage] = useState<Page>();

  useEffect(() => {
    if (!pages.isLoading) {
      const currentMenu = menuItems.data.find(item => item.slug === menuSlug);
      const currentPage = pages.data.find(page => page.slug === pageSlug);
      if (currentMenu && currentPage) {
        setPage(currentPage);
      } else {
        navigate(config.nofoundUrl, { replace: false });
      }
    }
  }, [pages.isLoading, menuSlug, pageSlug]);

  const pagePath =
    page?.href === '#' ? `/ ${menuSlug} / ${pageSlug}` : page?.href;

  return (
    <Container>
      {pages.isLoading ? (
        <GenralPageSkeleton />
      ) : (
        <PageLayout
          className={page?.className ?? ''}
          title={page?.title ?? ''}
          path={pagePath}
        >
          <PageLayout.Header />
          <PageLayout.Body>{parse(page?.content ?? '')}</PageLayout.Body>
        </PageLayout>
      )}
    </Container>
  );
}
