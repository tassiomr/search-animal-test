import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home-page';
import { ResultPage } from '../pages/result-page';

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
