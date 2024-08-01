import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout } from '@/layouts';
import {
  AssesmentsPage,
  AssesmentsPageDetail,
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
          <Route path='galerias/:id/:slug' element={<GalleriesPageDetail />} />
          <Route path='examenes' element={<AssesmentsPage />} />
          <Route path='examenes/:id/:slug' element={<AssesmentsPageDetail />} />
        </Route>
        <Route path='*' element={<NofoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
