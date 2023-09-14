import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { SearchComponent } from '../../shared/search-component';
import { FeebackMessage } from './components/feedback';
import './styles.css';

export const ResultPage = () => (
  <div className="result-container">
    <Header>
      <div className="search-component-result-container">
        <img
          className="image-result-container"
          style={{ width: 92, height: 30 }}
          src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Imagem"
        />
        <SearchComponent />
      </div>
    </Header>
    <div className="result-container-body">
      <FeebackMessage />
    </div>
    <Footer />
  </div>
);
