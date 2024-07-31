import { Header } from '@/components/molecules';
import { Outlet } from 'react-router-dom';
import './main-layout.scss';

export function MainLayout() {
  return (
    <div className='layout'>
      <Header />

      <section>
        <Outlet />
      </section>
    </div>
  );
}
