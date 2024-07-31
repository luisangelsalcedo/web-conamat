import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout } from '@/layout';

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.baseUrl} element={<MainLayout />}>
          <Route index element={<>Home Page</>} />
          <Route path=':menuSlug/:pageSlug' element={<>General Page</>} />
          <Route path='noticias' element={<>News Page</>} />
          <Route path='blog/:id/:slug' element={<>New Page Details</>} />
          <Route path='videos' element={<>Videos Page</>} />
          <Route path='galerias' element={<>Galleries Page</>} />
          <Route
            path='galerias/:id/:slug'
            element={<>Gallery Page Details</>}
          />
          <Route path='examenes' element={<>Assesments Page</>} />
          <Route
            path='examenes/:id/:slug'
            element={<>Assesment Page Details</>}
          />
        </Route>
        <Route path='*' element={<>No Found Page</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
