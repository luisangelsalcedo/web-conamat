import { ImageIcon } from '@/assets/svgs';
import { Link } from 'react-router-dom';
import './magic-image.scss';

interface PropsImage {
  src?: string;
  title?: string;
  icon?: React.ReactElement | string;
  border?: boolean;
  showTitle?: boolean;
  loading?: boolean;
}

function Image({ src, title, showTitle }: PropsImage) {
  console.log(typeof src);
  return (
    <>
      {src !== 'undefined' ? (
        <img src={src} alt={title} />
      ) : (
        <div className='image-default'>
          <ImageIcon />
        </div>
      )}
      {showTitle && <h3>{title}</h3>}
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
}: Props) {
  return (
    <div className={`magic-image ${!!border ? 'magic-image-border' : ''}`}>
      {!!to ? (
        <Link to={to} className='image image-link'>
          {!!icon && icon}
          <Image src={src} title={title} showTitle={showTitle} />
        </Link>
      ) : (
        <div className='image'>
          <Image src={src} title={title} showTitle={showTitle} />
        </div>
      )}
    </div>
  );
}
