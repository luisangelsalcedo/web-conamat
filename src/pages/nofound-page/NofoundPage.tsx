import { Link } from 'react-router-dom';
import { config } from '@/config';
import { Isotipo } from '@/assets/svgs';
import './nofound-page.scss';

export function NofoundPage() {
  return (
    <div className='nofound-page'>
      <Isotipo className='logotipo' />
      <h1>Página no encontrada</h1>
      <p>
        Parece que ha habido un error con la página que estabas buscando.
        <br />
        Es posible que la entrada haya sido eliminada o que la dirección no
        exista.
      </p>
      <Link to={config.baseUrl}>Ir a la página de Inicio</Link>
    </div>
  );
}
