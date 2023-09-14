import { Button } from '@ui/components';
import { Footer, Header, SearchComponent } from '@ui/shared';
import './styles.css';
import { constants } from '@app/configs';

export const HomePage = () => {
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
        <SearchComponent onChange={() => {}} onClose={() => {}} onKeyDown={() => {}} value="" />
        <div className="spacer" />
        <Button isDisabled={false} label="Buscar" onClick={() => {}} testId="home-page-button" />
      </div>
      <Footer testId="home-page-footer" />
    </div>
  );
};
