import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { ResultModel as Animal } from '@domain/models/result.model';
import { useNavigate } from 'react-router-dom';

export type SearchContextData = {
  isLoading: boolean;
  termToSearch: string;
  setTermToSearch: Dispatch<SetStateAction<string>>;
  clearTermToSearch: () => void;
  items: Animal[];
  selectedItem: Animal | null;
  goToResultPage: () => void;
};

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [termToSearch, setTermToSearch] = useState<string>('');

  const clearTermToSearch = () => setTermToSearch('');

  const goToResultPage = () => {
    navigate(`/result?term=${termToSearch}`);
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        items: [
          {
            id: 1,
            image: 'image.png',
            description: 'description',
            url: 'url',
            type: 'type',
            title: 'title',
          },
        ],
        termToSearch,
        setTermToSearch,
        clearTermToSearch,
        goToResultPage,
        selectedItem: {
          id: 1,
          image: 'image.png',
          description: 'description',
          url: 'url',
          type: 'type',
          title: 'title',
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
