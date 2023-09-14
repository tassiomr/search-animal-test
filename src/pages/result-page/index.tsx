import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { SearchComponent } from '../../shared/search-component';
import './styles.css';

export const ResultPage = () => (
  <div className="result-container">
    <Header>
      <img
        style={{ width: 92, height: 30 }}
        src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Imagem"
      />
      <SearchComponent />
    </Header>
    <div className="result-container-body">
      <div className="result-container-message">
        <Paragraph text="Not results found for " spanText="xxx" />
        <Paragraph
          text="Try looking for:"
          spanText="insect, fish, horse, crocodilia, bear, cetacean, cow, lion,rabbit, cat, snake, dog, bird"
        />
      </div>
    </div>
    <Footer />
  </div>
);

const Paragraph: React.FC<{ text: string; spanText: string }> = ({ text, spanText }) => {
  return (
    <p className="text-default text-feeback-message">
      {text} <span className="text-feeback-message--bolder">{spanText}</span>
    </p>
  );
};
