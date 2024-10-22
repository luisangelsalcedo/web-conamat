import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useMenuItem, usePages } from '@/store/hooks';
import { GenralPageSkeleton } from './GeneralPageSkeleton';
import { PageLayout } from '@/layouts';
import { Container } from '@/components/atoms';
import { config } from '@/config';

export function GeneralPage() {
  const { menuSlug, pageSlug } = useParams();
  const navigate = useNavigate();

  const { pages, getPageByIdSlug } = usePages();
  const { menuItems, getMenuItemByIdSlug } = useMenuItem();

  useEffect(() => {
    menuSlug && getMenuItemByIdSlug(menuSlug);
  }, [menuSlug]);

  useEffect(() => {
    pageSlug && getPageByIdSlug(pageSlug);
  }, [pageSlug]);

  // // validation slug menu
  // useEffect(() => {
  //   menuItems.error && navigate(config.nofoundUrl, { replace: false });
  // }, [menuItems]);

  // // validation slug page
  // useEffect(() => {
  //   pages.error && navigate(config.nofoundUrl, { replace: false });
  // }, [pages]);

  useEffect(() => {
    // ! menu undefined
    // ! page undefined
    if (menuItems.error && pages.error) {
      navigate(config.nofoundUrl, { replace: false });
    }

    // ! menu existe
    // ! page undefined
    if (!menuItems.error && pages.error) {
      navigate(config.nofoundUrl, { replace: false });
    }
  }, [menuItems, pages]);

  const pagePath =
    pages.page?.href === '#' ? `/ ${menuSlug} / ${pageSlug}` : pages.page?.href;

  // console.log({ menu: menuItems.error, page: pages.error });

  return (
    <Container>
      {pages.isLoading ? (
        <GenralPageSkeleton />
      ) : (
        <PageLayout
          className={pages.page?.className ?? ''}
          title={pages.page?.title ?? ''}
          path={pagePath}
        >
          <PageLayout.Header />
          <PageLayout.Body>{parse(pages.page?.content ?? '')}</PageLayout.Body>
        </PageLayout>
      )}
    </Container>
  );
}
