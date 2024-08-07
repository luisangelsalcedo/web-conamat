import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { usePopups } from '@/store/hooks';

import './popup.scss';

export function Popup() {
  const { popups, getPopups } = usePopups();
  const [active, setActive] = useState(false);

  useEffect(() => {
    getPopups();
  }, []);

  useEffect(() => {
    !!popups.data.length && setActive(true);
  }, [popups]);

  return (
    <div>
      {popups.isLoading ? (
        ''
      ) : (
        <div className={`popup-component ${active === true ? 'active' : ''}`}>
          <div
            className='popup-component-bottom'
            onClick={() => setActive(state => !state)}
          />
          <div className='popup-component-box'>
            <Swiper
              className='mySwiper'
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={popups.data.length > 1}
              navigation={popups.data.length > 1}
              loop={popups.data.length > 2}
            >
              {popups.data.map(item => (
                <SwiperSlide key={item.id}>
                  <Link to={item.href} target={item.target}>
                    <img
                      src={item.image?.sizes.full?.source_url}
                      width='100%'
                      className='full-image'
                      alt={item.title}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      {/* {!!popups.data.length && (
        
      )} */}
    </div>
  );
}
