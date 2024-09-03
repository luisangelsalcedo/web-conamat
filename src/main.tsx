import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Fancybox } from '@fancyapps/ui';
import { App } from './App';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@/assets/scss/global-styles.scss';

Fancybox.bind('[data-fancybox]');
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
