import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { config } from '@/config';
import './page-layout.scss';
import { TitleBar } from '@/components/atoms';

interface PageContextValue {
  title: string;
  path: string;
}
const PageContext = createContext({} as PageContextValue);
const { Provider } = PageContext;

interface PropsPageChildren {
  children: any;
}

function PageLayoutHeader() {
  const { path } = useContext(PageContext);
  return (
    <div className='page-layout-header'>
      <Link to={config.baseUrl}>Inicio</Link> {path}
    </div>
  );
}
function PageLayoutBody({ children }: PropsPageChildren) {
  const { title } = useContext(PageContext);
  return (
    <div className='page-layout-body'>
      <TitleBar>{title}</TitleBar>
      <div className='page-layout-content'>{children}</div>
    </div>
  );
}

interface Props {
  children: React.ReactElement | React.ReactElement[] | string;
  title: string;
  className?: string;
  path?: string;
  loading?: boolean;
}

export function PageLayout({
  children,
  title,
  className = '',
  path = '',
}: Props) {
  return (
    <Provider value={{ title, path }}>
      <div className={`page-layout ${className}`}>{children}</div>
    </Provider>
  );
}
PageLayout.Header = PageLayoutHeader;
PageLayout.Body = PageLayoutBody;
