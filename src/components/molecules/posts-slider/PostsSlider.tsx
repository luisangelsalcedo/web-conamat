import type { Post } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MagicImage } from '../magic-image/MagicImage';
import { EyeIcon } from '@/assets/svgs';
import './posts-slider.scss';

interface Props {
  posts: Post[];
}

export function PostsSlider({ posts }: Props) {
  return (
    <div className='posts-slider'>
      {posts.length > 0 && (
        <Swiper
          className='mySwiper'
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={posts.length > 1}
          loop={posts.length > 1}
        >
          {posts.map(post => {
            const thumbnail = String(
              `${post?.image?.sizes?.medium_large?.source_url}`
            );
            return (
              <SwiperSlide key={post.id}>
                <MagicImage
                  src={thumbnail}
                  title={post.title}
                  to={post.href}
                  border
                  showTitle
                  icon={<EyeIcon />}
                ></MagicImage>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
