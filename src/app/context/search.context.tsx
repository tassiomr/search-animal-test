import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { ResultModel as Animal } from '@domain/models/result.model';

export type SearchContextData = {
  isLoading: boolean;
  termToSearch: string;
  setTermToSearch: Dispatch<SetStateAction<string>>;
  clearTermToSearch: () => void;
  items: Animal[];
};

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [termToSearch, setTermToSearch] = useState<string>('');

  const clearTermToSearch = () => setTermToSearch('');

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        items: [],
        termToSearch,
        setTermToSearch,
        clearTermToSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
