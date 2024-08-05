import { useSlider } from '@/store/hooks';
import { Container } from '@/components/atoms';
import { Slider, StickyPostsBlock } from '@/components/molecules';
import './home-page.scss';

export function HomePage() {
  const { sliders } = useSlider();
  return (
    <div className='home-page'>
      <Slider sliders={sliders.data} isLoading={sliders.isLoading} />
      <Container>
        <div className='blocks'>
          <StickyPostsBlock />
          <div>block Video</div>
        </div>
      </Container>
    </div>
  );
}
