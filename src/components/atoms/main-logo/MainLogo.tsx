import { Link } from 'react-router-dom';
import { Logo } from '@/assets/svgs';
import { config } from '@/config';

export function MainLogo() {
  return (
    <Link
      to={config.baseUrl}
      className='main-logo'
      style={{ display: 'block', width: '15.6em' }}
    >
      <Logo />
    </Link>
  );
}
