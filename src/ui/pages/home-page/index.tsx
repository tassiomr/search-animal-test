import { Footer, Header, Button, Input } from '@ui/components';
import './styles.css';
import { constants } from '@app/configs';
import logo from '@ui/assets/logo.png';
import { HomePageViewModel } from './home-page.view-model';

export const HomePage = () => {
  const vModel = HomePageViewModel();

  return (
    <div className="home-container" data-testid="home-page">
      <Header testId="home-page-header">
        <p className="text-title-home-page">
          <span>{constants.homePage.titleSpan} </span> {constants.homePage.titleRest}
        </p>
      </Header>
      <div className="home-body" data-testid="home-page-body">
        <img src={logo} alt="logo" />
        <div className="spacer" />
        <Input onChange={vModel.setTerm} onClose={vModel.clearTerm} onKeyDown={vModel.onKeyDown} value={vModel.value} />
        <div className="spacer" />
        <Button
          isDisabled={vModel.isDisabledButton}
          label="Search"
          onClick={vModel.goToResultPage}
          testId="home-page-button"
        />
      </div>
      <Footer testId="home-page-footer" />
    </div>
  );
};

export default HomePage;
