import { createContext, useContext, useState } from 'react';
import { ResultModel as Animal } from '@domain/models/result.model';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NotFoundError } from '@domain/validators/error';
import { constants } from '@app/configs';
import searchAnimalService from '@app/services/search-animal.service';

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
  setTermToSearch: (term?: string) => void;
  clearTermToSearch: () => void;
  goToResultPage: () => void;
  getResults: () => Promise<void>;
  setAnimal: (animal: Animal | null) => void;
};

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

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
    setSelectedAnimal(null);
    setErrorMessage(null);
    setItems([]);

    if (termToSearch.length) {
      try {
        setIsLoading(true);

        setItems(await searchAnimalService.getAnimals(termToSearch));
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

  const changeTermToSearch = (value: string = '') => {
    setTermToSearch(value);
    setSearchParams({ term: value });
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        items,
        termToSearch,
        setTermToSearch: changeTermToSearch,
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
