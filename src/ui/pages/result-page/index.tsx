import React from 'react';
import './styles.css';
import { Header, Footer, SearchComponent } from '@ui/shared';
import { FeebackMessage } from './components/feedback';
import { ItemDetail } from '@ui/components';
import { useSearchContext } from '@app/contexts/search.context';
import { Loading } from './components/loading';
import { ResultList } from './components/result-list';

export const ResultPage = () => {
  const { isLoading, termToSearch, items, selectedAnimal, setTermToSearch, clearTermToSearch, getResults } =
    useSearchContext();

  const shouldDisplayFeedbackMessage = !isLoading && !items.length;
  const shouldDisplayResults = !isLoading && items.length;
  const shouldDisplayItemDetail = shouldDisplayResults && !!selectedAnimal;

  return (
    <div className="result-container" data-testid="result-page">
      <Header testId="result-page-header">
        <div className="search-component-result-container">
          <img className="image-result-container" alt="Result" src={''} />
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
        {shouldDisplayFeedbackMessage && <FeebackMessage term={termToSearch} />}
        <Loading isVisible={isLoading} />
        {shouldDisplayResults ? <ResultList animals={items} /> : null}
        {shouldDisplayItemDetail ? <ItemDetail item={selectedAnimal} /> : null}
      </div>
      <Footer />
    </div>
  );
};
