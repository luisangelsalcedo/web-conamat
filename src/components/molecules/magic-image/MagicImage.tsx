import { ImageIcon } from '@/assets/svgs';
import { Link } from 'react-router-dom';
import './magic-image.scss';

interface PropsImage<T = any> {
  src?: string;
  title?: string;
  icon?: React.ReactElement | string;
  border?: boolean;
  showTitle?: boolean;
  positionTitle?: 'bottom' | 'above';
  gallery?: string;
  state?: T;
}

function Image<T>({ src, title, showTitle }: PropsImage<T>) {
  return (
    <>
      {src !== 'undefined' ? (
        <img src={src} alt={title} />
      ) : (
        <div className='image-default'>
          <ImageIcon />
        </div>
      )}
      {showTitle && <h3 className='image-title'>{title}</h3>}
    </>
  );
}

interface Props extends PropsImage {
  to?: string;
}

export function MagicImage({
  src,
  to,
  title,
  icon,
  border = false,
  showTitle = false,
  positionTitle = 'above',
  gallery,
  state,
}: Props) {
  return (
    <div
      className={`magic-image ${
        !!border ? 'magic-image-border' : ''
      }  ${`image-title-${positionTitle}`} `}
    >
      {!!to ? (
        <Link
          to={to}
          className='image image-link'
          data-fancybox={gallery || null}
          state={state}
        >
          {!!icon && icon}
          <Image
            src={src}
            title={title}
            showTitle={showTitle}
            positionTitle={positionTitle}
          />
        </Link>
      ) : (
        <div className='image'>
          <Image
            src={src}
            title={title}
            showTitle={showTitle}
            positionTitle={positionTitle}
          />
        </div>
      )}
    </div>
  );
}
