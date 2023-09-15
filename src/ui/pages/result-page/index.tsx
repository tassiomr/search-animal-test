import React, { memo, useEffect } from 'react';
import './styles.css';
import { Header, Footer, SearchComponent } from '@ui/shared';
import { FeebackMessage } from './components/feedback';
import { ItemDetail } from '@ui/components';
import { useSearchContext } from '@app/contexts/search.context';
import { Loading } from './components/loading';
import { ResultList } from './components/result-list';
import logo from '@ui/assets/logo.png';
import { useQuery } from '@app/hooks/useQuery';

export const ResultPage = memo(function () {
  const {
    isLoading,
    termToSearch,
    items,
    selectedAnimal,
    setAnimal,
    errorMessage,
    setTermToSearch,
    clearTermToSearch,
    getResults,
  } = useSearchContext();

  const query = useQuery();
  const shouldDisplayFeedbackMessage = !isLoading && !items.length;
  const shouldDisplayResults = !isLoading && items.length;
  const shouldDisplayItemDetail = shouldDisplayResults && !!selectedAnimal;

  useEffect(() => {
    setTermToSearch(query.get('term') || '');
    getResults();
  }, []);

  return (
    <div className="result-container" data-testid="result-page">
      <Header testId="result-page-header">
        <div className="search-component-result-container">
          <img className="image-result-container" alt="Result" src={logo} />
          <SearchComponent
            testId="search-component-result-page"
            onChange={setTermToSearch}
            onClose={clearTermToSearch}
            onKeyDown={getResults}
            value={termToSearch}
          />
        </div>
      </Header>
      <div className="result-container-body" data-testid="result-container-body">
        {shouldDisplayFeedbackMessage && <FeebackMessage errorMessage={errorMessage} />}
        <Loading isVisible={isLoading} />
        {shouldDisplayResults ? <ResultList animals={items} onClick={setAnimal} /> : null}
        {shouldDisplayItemDetail ? <ItemDetail item={selectedAnimal} /> : null}
      </div>
      <Footer />
    </div>
  );
});
