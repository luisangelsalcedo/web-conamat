import { ArrowLeft, ArrowRight } from '@/assets/svgs';
import { Link } from 'react-router-dom';
import './paginator.scss';

interface Props {
  currentPage: number;
  limit: number;
  count: number;
}

export function Paginator({ currentPage, count, limit }: Props) {
  return (
    <div className='paginator'>
      {currentPage > 1 && (
        <Link to={`?page=${currentPage - 1}`}>
          <ArrowLeft />
        </Link>
      )}
      <span>{`0${currentPage}`.slice(-2)}</span>
      {count >= limit && (
        <Link to={`?page=${currentPage + 1}`}>
          <ArrowRight />
        </Link>
      )}
    </div>
  );
}
