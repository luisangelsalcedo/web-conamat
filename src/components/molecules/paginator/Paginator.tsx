import { ArrowLeft, ArrowRight } from '@/assets/svgs';
import { Link } from 'react-router-dom';
import './paginator.scss';

interface Props {
  currentPage: number;
}

export function Paginator({ currentPage }: Props) {
  return (
    <div className='paginator'>
      <Link
        to={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
        className={currentPage === 1 ? 'disabled' : ''}
      >
        <ArrowLeft />
      </Link>
      <span>{`0${currentPage}`.slice(-2)}</span>
      <Link to={`?page=${currentPage + 1}`}>
        <ArrowRight />
      </Link>
    </div>
  );
}
