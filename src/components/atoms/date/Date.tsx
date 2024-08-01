import { CalIcon } from '@/assets/svgs';
import './date.scss';

interface Props {
  date?: string;
  children?: string;
}

export function Date({ children, date }: Props) {
  const dateValue = date ?? '';
  const year = dateValue.slice(0, 4);
  const month = dateValue.slice(4, 6);
  const day = dateValue.slice(6);
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio ',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  return (
    <div className='date-component'>
      <CalIcon />
      {children || `${day} de ${months[Number(month) - 1]} del ${year}`}
    </div>
  );
}
