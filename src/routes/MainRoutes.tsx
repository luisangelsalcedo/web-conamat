import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout } from '@/layout';
import {
  AssesmentsPage,
  AssesmentsPageDetail,
  GalleriesPage,
  GalleriesPageDetail,
  GeneralPage,
  HomePage,
  NewsPage,
  NewsPageDetail,
  NofoundPage,
  VideosPage,
} from '@/pages';

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.baseUrl} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=':menuSlug/:pageSlug' element={<GeneralPage />} />
          <Route path='noticias' element={<NewsPage />} />
          <Route path='blog/:id/:slug' element={<NewsPageDetail />} />
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
