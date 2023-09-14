import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { SearchComponent } from '../../shared/search-component';
import { FeebackMessage } from './components/feedback';
import { ItemDetail } from '../../components/item-detail';
import { Loading } from './components/loading';
import { ResultList } from './components/result-list';
import './styles.css';

export const ResultPage = () => (
  <div className="result-container" data-testid="result-page">
    <Header testId="result-page-header">
      <div className="search-component-result-container">
        <img className="image-result-container" src={''} />
        <SearchComponent />
      </div>
    </Header>
    <div className="result-container-body">
      {/* <FeebackMessage /> */}
      {/* <Loading /> */}
      {/* <ResultList /> */}
      {/* <ItemDetail /> */}
    </div>
    <Footer />
  </div>
);
