import {
  LogoCesarVallejo65,
  LogoAduniSVG
} from '@/assets/svgs';
import './organizado.scss';

export function Organizado() {
    return (
    <div className="organizado">
        <h3><span>Organizado por</span></h3>
        <ul>
            <li>
                <a href="https://academiacesarvallejo.edu.pe/" target='_blank'>
                    <LogoCesarVallejo65 className='vallejo' />
                </a>
            </li>
            <li>
                <a href="https://aduni.edu.pe/" target='_blank'>
                    <LogoAduniSVG className='aduni'/>
                </a>
            </li>
        </ul>
    </div>
    )
}