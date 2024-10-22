import { Suspense } from 'react';
import { FloatingVideo, Footer, Header, Popup } from '@/components/molecules';
import { Outlet } from 'react-router-dom';
import './main-layout.scss';

export function MainLayout() {
  return (
    <div className='layout'>
      <Suspense fallback={`...`}>
        <Popup />
        <FloatingVideo />
      </Suspense>
      <Header />

      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
