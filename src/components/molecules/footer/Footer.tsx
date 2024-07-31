import {
  LogoCesarVallejo,
  LogoMas60,
  LogoAduni,
  LogoUch,
  LogoCbb,
  LogoLumbreras,
  Isotipo,
  MailIcon,
  PhoneIcon,
  WassIcon,
} from '@/assets/svgs';
import './footer.scss';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-auspiciadores'>
        <div className='container'>
          <h2>ORGANIZADO POR:</h2>
          <ul>
            <li>
              <a
                href='https://academiacesarvallejo.edu.pe/'
                title='Academia César Vallejo'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoCesarVallejo} />
              </a>
            </li>
            <li>
              <a
                href='https://academiacesarvallejo.edu.pe/'
                title='Más de 60 Años'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoMas60} alt='' />
              </a>
            </li>
            <li>
              <a
                href='https://aduni.edu.pe/'
                title='Academia Aduni'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoAduni} />
              </a>
            </li>
            <li>
              <a
                href='https://www.uch.edu.pe/'
                title='Universidad de Ciencias y Humanidades'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoUch} />
              </a>
            </li>
            <li>
              <a
                href='https://cbb.edu.pe/'
                title='Colegio Bertolt Brecht'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoCbb} />
              </a>
            </li>
            <li>
              <a
                href='http://www.elumbreras.com.pe/'
                title='Lumbreras Editores'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LogoLumbreras} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-direcciones'>
        <div className='container'>
          <div>
            <h3 className='logo'>
              <Isotipo />
            </h3>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href='informes@conamat.edu.pe'
                  target='_blank'
                  rel='noreferrer'
                >
                  <MailIcon />
                  informes@conamat.edu.pe
                </a>
              </li>
              <li>
                <a href='tel:014800048' target='_blank' rel='noreferrer'>
                  <PhoneIcon />
                  +01 480 0048
                </a>
              </li>
              <li>
                <a href='https://api.whatsapp.com/send?phone=51987839552&amp;text=Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n'>
                  <WassIcon />
                  987 839 552
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>
              Todos los derechos reservados 2023 <br />
              <a
                href='views/Autorizacion_para_el_uso_y_tratamiento_de_datos.pdf'
                target='_blank'
              >
                Autorizacion para el uso y tratamiento de datos
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
