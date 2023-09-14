import React from 'react';
import { SearchComponent } from '../../shared/search-component';
import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { Button } from '../../components/button';
import './styles.css';

export const HomePage = () => {
  return (
    <div className="home-container">
      <Header>
        <p className="text-title-home-page">
          <span>AgileContent </span> FrontEnd Test
        </p>
      </Header>
      <div className="home-body">
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <div className="spacer" />
        <SearchComponent />
        <div className="spacer" />
        <Button />
      </div>
      <Footer />
    </div>
  );
};
