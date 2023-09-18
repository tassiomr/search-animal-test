import { createBrowserRouter } from 'react-router-dom';
import { SearchProvider } from '@app/contexts/search.context';
import { HomePage, ResultPage } from '@ui/pages';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default createBrowserRouter(
  [
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
  ],
  { basename: '/' }
);
