import { ItemDetail } from '@ui/components';
import { Footer, Header, SearchComponent } from '@ui/shared';
import { ResultModel } from '@domain/models/result.model';
import { FeebackMessage } from './components/feedback';
import { Loading } from './components/loading';
import { ResultList } from './components/result-list';
import './styles.css';

export const ResultPage = () => (
  <div className="result-container" data-testid="result-page">
    <Header testId="result-page-header">
      <div className="search-component-result-container">
        <img className="image-result-container" src={''} />
        <SearchComponent
          testId="search-component-result-page"
          onChange={() => {}}
          onClose={() => {}}
          onKeyDown={() => {}}
          value=""
        />
      </div>
    </Header>
    <div className="result-container-body" data-testid="result-container-body">
      <FeebackMessage term="" />
      <Loading />
      <ResultList animals={[]} />
      <ItemDetail item={{} as ResultModel} />
    </div>
    <Footer />
  </div>
);
