import { Titlebar } from '@/assets/svgs';
import './title-bar.scss';

interface Props {
  children: string;
}

export function TitleBar({ children }: Props) {
  return (
    <div className='title-bar'>
      <h1 className='title-bar-element'>
        <span>{children}</span>
        <Titlebar />
      </h1>
    </div>
  );
}
