import { Footer, Header } from '@/components/molecules';
import { Outlet } from 'react-router-dom';
import './main-layout.scss';
import { Popup } from '@/components/molecules/popup/Popup';

export function MainLayout() {
  return (
    <div className='layout'>
      <Popup />
      <Header />

      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
