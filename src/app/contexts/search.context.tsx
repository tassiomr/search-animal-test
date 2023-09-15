import { createContext, useContext, useState } from 'react';
import { ResultModel as Animal } from '@domain/models/result.model';
import { useNavigate } from 'react-router-dom';
import { SearchUsecase } from '@domain/models/search-use-case';
import { NotFoundError } from '@domain/validators/error';
import { constants } from '@app/configs';

type ErrorMessage = {
  message: string;
  span: string;
};

export type SearchContextData = {
  isLoading: boolean;
  termToSearch: string;
  items: Animal[];
  selectedAnimal: Animal | null;
  errorMessage: ErrorMessage | null;
  setTermToSearch: (term: string) => void;
  clearTermToSearch: () => void;
  goToResultPage: () => void;
  getResults: () => Promise<void>;
  setAnimal: (animal: Animal | null) => void;
};

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [termToSearch, setTermToSearch] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);

  const [items, setItems] = useState<Animal[]>([]);

  const clearTermToSearch = () => setTermToSearch('');

  const goToResultPage = () => {
    navigate(`/result?term=${termToSearch}`);
  };

  const getResults = async () => {
    setIsLoading(true);
    setSelectedAnimal(null);
    setItems([]);
    setErrorMessage(null);

    if (termToSearch.length) {
      try {
        const animalItems = await SearchUsecase(termToSearch);
        setItems(animalItems);
      } catch (error) {
        if (error instanceof NotFoundError) {
          setErrorMessage({ message: error.message, span: error.span });
        } else {
          setErrorMessage({ message: constants.errors.unknown, span: '' });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        items,
        termToSearch,
        setTermToSearch,
        clearTermToSearch,
        goToResultPage,
        getResults,
        selectedAnimal,
        setAnimal: setSelectedAnimal,
        errorMessage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
