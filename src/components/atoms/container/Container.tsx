import './container.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[] | string;
}
export function Container({ children }: Props) {
  return <div className='container'>{children}</div>;
}
