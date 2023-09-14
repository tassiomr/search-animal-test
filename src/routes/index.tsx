import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/home-page';
import { ResultPage } from '../ui/pages/result-page';

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
]);
