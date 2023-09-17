import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useQuery } from './useQuery';

type UseRouter = {
  navigate: NavigateFunction;
  setParamsPath: (value: string) => void;
  query: URLSearchParams;
  paramRouter: string | null;
};

export const useRouter = (): UseRouter => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = useQuery();
  const [_, setSearchParams] = useSearchParams();

  const setParamsPath = (value: string) => {
    if (pathname === '/result') {
      setSearchParams({ term: value });
    }
  };

  const getTerm = () => {
    const param = query.get('term');
    if (param) {
      return param;
    }
    return '';
  };

  return {
    navigate,
    query,
    setParamsPath,
    paramRouter: getTerm(),
  };
};
