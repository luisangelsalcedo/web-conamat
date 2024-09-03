import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout } from '@/layouts';
import {
  AssessmentsPage,
  AssessmentsPageDetail,
  GalleriesPage,
  GalleriesPageDetail,
  GeneralPage,
  HomePage,
  BlogPage,
  BlogPageDetail,
  NofoundPage,
  VideosPage,
} from '@/components/pages';

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.baseUrl} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=':menuSlug/:pageSlug' element={<GeneralPage />} />
          <Route path='noticias' element={<BlogPage />} />
          <Route path='blog/:id/:slug' element={<BlogPageDetail />} />
          <Route path='videos' element={<VideosPage />} />
          <Route path='galerias' element={<GalleriesPage />} />
          <Route path='galerias/:slug' element={<GalleriesPageDetail />} />
          <Route path='examenes' element={<AssessmentsPage />} />
          <Route path='examenes/:slug' element={<AssessmentsPageDetail />} />
          <Route path='*' element={<NofoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
