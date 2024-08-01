import { Link } from 'react-router-dom';
import { WarningIcon } from '@/assets/svgs';
import './empty-elements.scss';

export function EmptyElements() {
  return (
    <div className='empty-elements'>
      <WarningIcon />
      <span>No hay elementos</span>
      <Link to='?page=1'>Regresar al inicio</Link>
    </div>
  );
}
