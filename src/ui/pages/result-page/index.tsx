import React from 'react';
import './styles.css';
import { FeebackMessage } from './components/feedback';
import { Input, ItemDetail, Header, Footer } from '@ui/components';
import { Loading } from './components/loading';
import { ResultList } from './components/result-list';
import logo from '@ui/assets/logo.png';
import { ResultPageViewModel } from './result-page.view-model';

export const ResultPage = () => {
  const vModel = ResultPageViewModel();

  return (
    <div className="result-container" data-testid="result-page">
      <Header testId="result-page-header">
        <div className="search-component-result-container">
          <img className="image-result-container" alt="Result" src={logo} />
          <Input
            testId="search-input-result-page"
            onChange={vModel.onChange}
            onClose={vModel.onClose}
            onKeyDown={vModel.onKeyDown}
            value={vModel.term}
          />
        </div>
      </Header>
      <div className="result-container-body" data-testid="result-container-body">
        {vModel.shouldDisplayFeedbackMessage && <FeebackMessage errorMessage={vModel.errorMessage} />}
        <Loading isVisible={vModel.isLoading} />
        {vModel.shouldDisplayResults ? <ResultList animals={vModel.items} onClick={vModel.onClick} /> : null}
        {vModel.shouldDisplayItemDetail ? (
          <ItemDetail testId="item-detail-search" onClose={vModel.onCleanSelection} item={vModel.item!} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
