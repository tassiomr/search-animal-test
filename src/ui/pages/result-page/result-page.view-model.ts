import { useSearchContext } from '@app/contexts/search.context';
import { Animal } from '@app/models/animal.model';
import { useEffect } from 'react';

export type ResultPageViewModel = {
  isLoading: boolean;
  term: string;
  items: Animal[];
  item: Animal | null;
  errorMessage: { message: string; span: string } | null;

  shouldDisplayFeedbackMessage: boolean;
  shouldDisplayResults: boolean;
  shouldDisplayItemDetail: boolean;

  onChange: (value: string) => void;
  onClose: () => void;
  onKeyDown: () => void;
  onCleanSelection: () => void;
  onClick: (animal: Animal) => void;
};

export const ResultPageViewModel = (): ResultPageViewModel => {
  const {
    isLoading,
    termToSearch,
    items,
    selectedAnimal,
    clearSelection,
    errorMessage,
    setTermToSearch,
    clearTermToSearch,
    getResults,
    setAnimal,
  } = useSearchContext();

  const shouldDisplayFeedbackMessage = !isLoading && !items.length;
  const shouldDisplayResults = !isLoading && items.length > 0;
  const shouldDisplayItemDetail = shouldDisplayResults && !!selectedAnimal;

  const onChange = (value: string) => {
    setTermToSearch(value);
  };

  useEffect(() => {
    getResults();
  }, []);

  return {
    isLoading,
    term: termToSearch,
    items,
    item: selectedAnimal,
    errorMessage,
    onChange,
    onKeyDown: getResults,
    onClose: clearSelection,
    onCleanSelection: clearSelection,
    shouldDisplayFeedbackMessage,
    shouldDisplayResults,
    shouldDisplayItemDetail,
    onClick: setAnimal,
  };
};
