import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Slider } from '@/types';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import './slider.scss';

interface Props {
  sliders: Slider[];
  isLoading: boolean;
}

export function Slider({ sliders, isLoading }: Props) {
  return (
    <section id='banner' className='slider'>
      {isLoading ? (
        <Skeleton
          variant='rounded'
          height={300}
          style={{ marginBottom: '4em' }}
        />
      ) : (
        <Swiper
          className='mySwiper'
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={sliders.length > 1}
          navigation={sliders.length > 1}
          loop={sliders.length > 1}
        >
          {sliders.map(item => (
            <SwiperSlide key={item.id}>
              <Link to={item.href} target={item.target}>
                <img
                  src={item.mobileImage?.sizes.full?.source_url}
                  width='100%'
                  className='mobile-image'
                />
                <img
                  src={item.image?.sizes.full?.source_url}
                  width='100%'
                  className='full-image'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
