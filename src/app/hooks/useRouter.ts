import { NavigateFunction, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

type UseRouter = {
  navigate: NavigateFunction;
  setParamsPath: (value: string) => void;
};

export const useRouter = (): UseRouter => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [_, setSearchParams] = useSearchParams();

  const setParamsPath = (value: string) => {
    if (pathname === '/result') {
      setSearchParams({ term: value });
    }
  };

  return {
    navigate,
    setParamsPath,
  };
};
