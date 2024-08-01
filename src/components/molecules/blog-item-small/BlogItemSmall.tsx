import { Link } from 'react-router-dom';
import { ImageIcon } from '@/assets/svgs';
import parse from 'html-react-parser';
import { Date } from '@/components/atoms';
import type { BlogItem } from '@/types';
import { config } from '@/config';
import './blog-item-small.scss';

interface Props {
  data: BlogItem;
}

export function BlogItemSmall({ data }: Props) {
  const href = String(`${config.baseUrl}blog/${data.id}/${data.slug}`);
  const thumbnail = String(`${data?.image?.sizes?.thumbnail?.source_url}`);

  return (
    <div className='blog-item-small'>
      <div className='blog-item-small-left'>
        <Link to={href} className='blog-item-small-image'>
          {data?.image ? (
            <img src={thumbnail} alt={data.title} />
          ) : (
            <div className='blog-item-small-image-default'>
              <ImageIcon />
            </div>
          )}
        </Link>
      </div>
      <div className='blog-item-small-right'>
        <h3>
          <Link to={href}>{data.title}</Link>
        </h3>
        {!!data?.publicationDate && <Date date={data?.publicationDate ?? ''} />}
        <div className='blog-item-small-description'>{parse(data.excerpt)}</div>
      </div>
    </div>
  );
}
