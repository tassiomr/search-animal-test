import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../ui/pages/home-page';
import { ResultPage } from '../../ui/pages/result-page';
import { SearchProvider } from '@app/contexts/search.context';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default createBrowserRouter([
  {
    path: '/',
    element: (
      <ContextProvider>
        <HomePage />
      </ContextProvider>
    ),
  },
  {
    path: '/result',
    element: (
      <ContextProvider>
        <ResultPage />,
      </ContextProvider>
    ),
  },
]);
