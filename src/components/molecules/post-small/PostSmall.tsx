import { Link } from 'react-router-dom';
import { Post } from '@/types';
import { Date } from '@/components/atoms';
import './post-small.scss';

interface Props {
  post: Post;
  to: string;
}

export function PostSmall({ post, to }: Props) {
  return (
    <div className='post-small'>
      <h3>
        <Link to={to}>{post.title}</Link>
      </h3>
      {!!post?.publicationDate && <Date date={post?.publicationDate ?? ''} />}
    </div>
  );
}
