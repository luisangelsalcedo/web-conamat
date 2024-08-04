import parse from 'html-react-parser';
import type { Post } from '@/types';
import { config } from '@/config';
import { PostSmall } from '../post-small/PostSmall';
import { MagicImage } from '@/components/molecules';
import './post-medium.scss';
import { EyeIcon } from '@/assets/svgs';

interface Props {
  post: Post;
}

export function PostMedium({ post }: Props) {
  const href = String(`${config.baseUrl}blog/${post.id}/${post.slug}`);
  const thumbnail = String(`${post?.image?.sizes?.thumbnail?.source_url}`);

  return (
    <div className='post-medium'>
      <div className='post-medium-left'>
        {post?.image && (
          <MagicImage
            src={thumbnail}
            title={post.title}
            to={href}
            border
            icon={<EyeIcon />}
          />
        )}
      </div>
      <div className='post-medium-right'>
        <PostSmall post={post} to={href}></PostSmall>
        <div className='post-medium-description'>{parse(post.excerpt)}</div>
      </div>
    </div>
  );
}
