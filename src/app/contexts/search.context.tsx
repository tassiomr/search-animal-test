import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NotFoundError } from '@data/validators/error';
import { constants } from '@app/configs';
import searchAnimalService from '@data/services/search-animal.service';
import { useRouter } from '@app/hooks/useRouter';
import { Animal } from '@app/models/animal.model';
import { animalAdapter } from '@app/adapters/animal.adapter';

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

  setAnimal: Dispatch<SetStateAction<Animal | null>>;

  setTermToSearch: (term: string) => void;
  clearTermToSearch: () => void;
  goToResultPage: () => void;
  getResults: () => Promise<void>;
  clearSelection: () => void;
};

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const { navigate, paramRouter } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [termToSearch, setTermToSearch] = useState('');
  const [selectedAnimal, setAnimal] = useState<Animal | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [items, setItems] = useState<Animal[]>([]);

  const clearTermToSearch = () => setTermToSearch('');
  const clearSelection = () => setAnimal(null);

  const goToResultPage = () => {
    navigate(`/result`);
  };

  const changeTermToSearch = (value: string) => {
    setTermToSearch(value);
  };

  const getResults = async () => {
    setAnimal(null);
    setErrorMessage(null);
    setItems([]);

    if (termToSearch.length) {
      try {
        setIsLoading(true);

        const items = await searchAnimalService.getAnimals(
          termToSearch.toLowerCase()
        );
        setItems(items.map((item) => animalAdapter(item)));
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

  useEffect(() => {
    if (paramRouter) {
      setTermToSearch(paramRouter);
      setItems([]);
    }
  }, []);

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
        clearSelection,
        errorMessage,
        setAnimal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
