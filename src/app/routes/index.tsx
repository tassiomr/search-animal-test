import { createBrowserRouter } from 'react-router-dom';
import { SearchProvider } from '@app/contexts/search.context';
import { lazy } from 'react';

const _HomePage = lazy(() => import('@ui/pages/home-page'));
const _ResultPage = lazy(() => import('@ui/pages/result-page'));

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default createBrowserRouter([
  {
    path: '/',
    element: (
      <ContextProvider>
        <_HomePage />
      </ContextProvider>
    ),
  },
  {
    path: '/result',
    element: (
      <ContextProvider>
        <_ResultPage />,
      </ContextProvider>
    ),
  },
]);
