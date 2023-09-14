import { Button } from '@ui/components';
import { Footer, Header, SearchComponent } from '@ui/shared';
import './styles.css';
import { constants } from '@app/configs';
import { useSearchContext } from '@app/context/search.context';

export const HomePage = () => {
  const { termToSearch, setTermToSearch, clearTermToSearch, goToResultPage } = useSearchContext();

  const onKeyDown = () => {
    if (termToSearch.length) {
      goToResultPage();
    }
  };

  return (
    <div className="home-container" data-testid="home-page">
      <Header testId="home-page-header">
        <p className="text-title-home-page">
          <span>{constants.homePage.titleSpan} </span> {constants.homePage.titleRest}
        </p>
      </Header>
      <div className="home-body" data-testid="home-page-body">
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <div className="spacer" />
        <SearchComponent
          onChange={setTermToSearch}
          onClose={clearTermToSearch}
          onKeyDown={onKeyDown}
          value={termToSearch}
        />
        <div className="spacer" />
        <Button isDisabled={!termToSearch.length} label="Buscar" onClick={goToResultPage} testId="home-page-button" />
      </div>
      <Footer testId="home-page-footer" />
    </div>
  );
};
