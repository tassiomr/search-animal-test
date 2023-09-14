import React from 'react';
import { SearchComponent } from '../../shared/search-component';
import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { Button } from '../../components/button';
import './styles.css';

export const HomePage = () => {
  return (
    <div className="home-container" data-testid="home-page">
      <Header testId="home-page-header">
        <p className="text-title-home-page">
          <span>AgileContent </span> FrontEnd Test
        </p>
      </Header>
      <div className="home-body" data-testid="home-page-body">
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <div className="spacer" />
        <SearchComponent />
        <div className="spacer" />
        <Button isDisabled={false} label="Buscar" onClick={() => {}} testId="home-page-button" />
      </div>
      <Footer testId="home-page-footer" />
    </div>
  );
};
