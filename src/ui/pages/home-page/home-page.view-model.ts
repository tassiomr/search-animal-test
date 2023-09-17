import { useSearchContext } from '@app/contexts/search.context';

type HomePageViewModel = {
  onKeyDown: () => void;
  setTerm: (value: string) => void;
  clearTerm: () => void;
  goToResultPage: () => void;
  isDisabledButton: boolean;
  value: string;
};

export const HomePageViewModel = (): HomePageViewModel => {
  const { termToSearch, setTermToSearch, clearTermToSearch, goToResultPage } = useSearchContext();

  const isDisabledButton = !termToSearch.length;
  const onKeyDown = () => {
    if (termToSearch.length) {
      goToResultPage();
    }
  };
  return {
    value: termToSearch,
    isDisabledButton,
    onKeyDown,
    setTerm: setTermToSearch,
    clearTerm: clearTermToSearch,
    goToResultPage,
  };
};
