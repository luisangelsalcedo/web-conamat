import { ImageIcon } from '@/assets/svgs';
import { Link } from 'react-router-dom';
import './magic-image.scss';

interface PropsImage {
  src?: string;
  title?: string;
  icon?: React.ReactElement | string;
  size?: string;
  border?: boolean;
}

function Image({ src, title }: PropsImage) {
  return (
    <>
      {src ? (
        <img src={src} alt={title} />
      ) : (
        <div className='image-default'>
          <ImageIcon />
        </div>
      )}
    </>
  );
}

interface Props extends PropsImage {
  to?: string;
}

export function MagicImage({ src, to, title, icon, size, border }: Props) {
  return (
    <div className={`magic-image ${!!border ? 'magic-image-border' : ''}`}>
      {!!to ? (
        <Link to={to} className='image image-link'>
          {!!icon && icon}
          <Image src={src} title={title} />
        </Link>
      ) : (
        <div className='image'>
          <Image src={src} title={title} />
        </div>
      )}
    </div>
  );
}
