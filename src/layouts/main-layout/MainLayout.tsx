import { FloatingVideo, Footer, Header, Popup } from '@/components/molecules';
import { Outlet } from 'react-router-dom';
import './main-layout.scss';

export function MainLayout() {
  return (
    <div className='layout'>
      <Popup />
      <FloatingVideo />
      <Header />

      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
