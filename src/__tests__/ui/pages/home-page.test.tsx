import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '@ui/pages';
import { constants } from '@app/configs';
import { SearchContext, SearchContextData } from '@app/context/search.context';

const Provider: React.FC<{ children: React.ReactNode; value: SearchContextData }> = ({ children, value }) => {
  return (
    <SearchContext.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const defaultProps: SearchContextData = {
  isLoading: false,
  termToSearch: '',
  setTermToSearch: jest.fn,
  clearTermToSearch: jest.fn,
  items: [],
};

const getProvider =
  (value: SearchContextData = defaultProps) =>
  ({ children }: { children: React.ReactNode }) => <Provider value={value}>{children}</Provider>;

describe('HomePage Component', () => {
  it('should render the HomePage component', () => {
    render(<HomePage />, { wrapper: getProvider() });

    const homePageComponent = screen.getByTestId('home-page');
    expect(homePageComponent).toBeInTheDocument();
  });

  it('should render the header with the specified title', () => {
    render(<HomePage />, { wrapper: getProvider() });

    const headerComponent = screen.getByTestId('home-page-header');
    expect(headerComponent).toBeInTheDocument();

    const titleText = screen.getByText(constants.homePage.titleRest);
    expect(titleText).toBeInTheDocument();
  });

  it('should render the body with an image, search component, and a button', () => {
    render(<HomePage />, { wrapper: getProvider() });

    const bodyComponent = screen.getByTestId('home-page-body');
    expect(bodyComponent).toBeInTheDocument();

    const imageComponent = screen.getByAltText('Imagem');
    expect(imageComponent).toBeInTheDocument();

    const searchComponentComponent = screen.getByTestId('input-search-component');
    expect(searchComponentComponent).toBeInTheDocument();

    const buttonComponent = screen.getByTestId('home-page-button');
    expect(buttonComponent).toBeInTheDocument();
  });

  it('should render the button disabled with a term to search is empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponet = screen.getByTestId('home-page-button');
    expect(buttonComponet).toBeDisabled();
  });

  it('should render the button not disabled with a term to search is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'bird',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponet = screen.getByTestId('home-page-button');
    expect(buttonComponet).not.toBeDisabled();
  });

  it('should render the button to close when not disabled with a term to search is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const closeButtonComponent = screen.getByTestId('clean-icon-button');

    expect(closeButtonComponent).toHaveClass('icons-search-component--none');
  });

  it('should render the button to close when not disabled with a term to search is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'bird',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const closeButtonComponent = screen.getByTestId('clean-icon-button');

    expect(closeButtonComponent).toHaveClass('icons-search-component');
  });
});
