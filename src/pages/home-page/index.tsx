import React from 'react';
import { CenterWrapper, Container } from './styles';
import { SearchComponent } from '../../shared/search-component';
import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <CenterWrapper>
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <SearchComponent />
      </CenterWrapper>
      <Footer />
    </Container>
  );
};
