import React from 'react';
import { Container, Body } from './styles';
import { SearchComponent } from '../../shared/search-component';
import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { Button } from '../../components/button';

export const HomePage = () => {
  return (
    <Container>
      <Header>
        <p className="text-default text-medium text-title-home-page--black">
          <span className="text-title-home-page--bolder">AgileContent </span> FrontEnd Test
        </p>
      </Header>
      <Body>
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <SearchComponent />
        <Button />
      </Body>
      <Footer />
    </Container>
  );
};
