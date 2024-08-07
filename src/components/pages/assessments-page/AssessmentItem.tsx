import type { Assessment } from '@/types';
import { Date } from '@/components/atoms';
import { Link } from 'react-router-dom';

interface Props {
  data: Assessment;
}
export function AssesmentItem({ data }: Props) {
  return (
    <div className='assessment-page-item'>
      <h3>{data.title}</h3>
      {!!data?.publicationDate && (
        <Date>{data?.publicationDate.slice(0, 4) ?? ''}</Date>
      )}
      <Link to={data.href}>Ver exámenes</Link>
    </div>
  );
}
