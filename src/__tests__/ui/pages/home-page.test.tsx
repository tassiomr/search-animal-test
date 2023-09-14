import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HomePage } from '@ui/pages';
import { constants } from '@app/configs';

describe('HomePage Component', () => {
  it('should render the HomePage component', () => {
    render(<HomePage />);

    const homePageComponent = screen.getByTestId('home-page');
    expect(homePageComponent).toBeInTheDocument();
  });

  it('should render the header with the specified title', () => {
    render(<HomePage />);

    const headerComponent = screen.getByTestId('home-page-header');
    expect(headerComponent).toBeInTheDocument();

    const titleText = screen.getByText(constants.homePage.titleRest);
    expect(titleText).toBeInTheDocument();
  });

  it('should render the body with an image, search component, and a button', () => {
    render(<HomePage />);

    const bodyComponent = screen.getByTestId('home-page-body');
    expect(bodyComponent).toBeInTheDocument();

    const imageComponent = screen.getByAltText('Imagem');
    expect(imageComponent).toBeInTheDocument();

    const searchComponentComponent = screen.getByTestId('input-search-component');
    expect(searchComponentComponent).toBeInTheDocument();

    const buttonComponent = screen.getByTestId('home-page-button');
    expect(buttonComponent).toBeInTheDocument();
  });
});
