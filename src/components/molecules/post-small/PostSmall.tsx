import { Link } from 'react-router-dom';
import { ImageIcon } from '@/assets/svgs';
import parse from 'html-react-parser';
import { Date } from '@/components/atoms';
import type { Post } from '@/types';
import { config } from '@/config';
import './post-small.scss';

interface Props {
  data: Post;
}

export function PostSmall({ data }: Props) {
  const href = String(`${config.baseUrl}blog/${data.id}/${data.slug}`);
  const thumbnail = String(`${data?.image?.sizes?.thumbnail?.source_url}`);

  return (
    <div className='post-small'>
      <div className='post-small-left'>
        <Link to={href} className='post-small-image'>
          {data?.image ? (
            <img src={thumbnail} alt={data.title} />
          ) : (
            <div className='post-small-image-default'>
              <ImageIcon />
            </div>
          )}
        </Link>
      </div>
      <div className='post-small-right'>
        <h3>
          <Link to={href}>{data.title}</Link>
        </h3>
        {!!data?.publicationDate && <Date date={data?.publicationDate ?? ''} />}
        <div className='post-small-description'>{parse(data.excerpt)}</div>
      </div>
    </div>
  );
}
