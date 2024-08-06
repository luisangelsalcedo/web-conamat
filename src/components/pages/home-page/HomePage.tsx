import { useSlider } from '@/store/hooks';
import { Container, TitleBar } from '@/components/atoms';
import {
  HighlightVideosBlock,
  Slider,
  StickyPostsBlock,
} from '@/components/molecules';
import './home-page.scss';

export function HomePage() {
  const { sliders } = useSlider();
  return (
    <div className='home-page'>
      <Slider sliders={sliders.data} isLoading={sliders.isLoading} />
      <Container>
        <div className='blocks'>
          <div>
            <TitleBar>Noticias</TitleBar>
            <StickyPostsBlock />
          </div>
          <div>
            <TitleBar>Videos</TitleBar>
            <HighlightVideosBlock />
          </div>
        </div>
      </Container>
    </div>
  );
}
