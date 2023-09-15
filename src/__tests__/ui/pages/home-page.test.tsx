import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
  setTermToSearch: jest.fn(),
  clearTermToSearch: jest.fn(),
  items: [],
  goToResultPage: jest.fn(),
  selectedItem: null,
  getResults: jest.fn(),
};

const getProvider =
  (value: SearchContextData = defaultProps) =>
  ({ children }: { children: React.ReactNode }) => <Provider value={value}>{children}</Provider>;

describe('HomePage Component', () => {
  it('renders the HomePage component', () => {
    render(<HomePage />, { wrapper: getProvider() });

    const homePageComponent = screen.getByTestId('home-page');
    expect(homePageComponent).toBeInTheDocument();
  });

  it('renders the header with the expected title', () => {
    render(<HomePage />, { wrapper: getProvider() });

    const headerComponent = screen.getByTestId('home-page-header');
    expect(headerComponent).toBeInTheDocument();

    const titleText = screen.getByText(constants.homePage.titleRest);
    expect(titleText).toBeInTheDocument();
  });

  it('renders the body with an image, search component, and a button', () => {
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

  it('disables the button when the search term is empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponent = screen.getByTestId('home-page-button');
    expect(buttonComponent).toBeDisabled();
  });

  it('enables the button when the search term is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'bird',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponent = screen.getByTestId('home-page-button');
    expect(buttonComponent).not.toBeDisabled();
  });

  it('displays the clear button with the correct class when the search term is empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const clearButtonComponent = screen.getByTestId('clean-icon-button');

    expect(clearButtonComponent).toHaveClass('icons-search-component--none');
  });

  it('displays the clear button with the correct class when the search term is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'bird',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const clearButtonComponent = screen.getByTestId('clean-icon-button');

    expect(clearButtonComponent).toHaveClass('icons-search-component');
  });

  it('handles button click by invoking the "go to result page" function when the search term is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'bird',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponent = screen.getByTestId('home-page-button');
    fireEvent.click(buttonComponent);
    expect(props.goToResultPage).toHaveBeenCalled();
  });

  it('does not handle button click by invoking the "go to result page" function when the search term is empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const buttonComponent = screen.getByTestId('home-page-button');
    fireEvent.click(buttonComponent);
    expect(props.goToResultPage).not.toHaveBeenCalled();
  });

  it('does not call "go to result page" when the Enter key is pressed and the search term is empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: '',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const inputComponent = screen.getByTestId('input-search-component');
    fireEvent.keyDown(inputComponent, { key: 'Enter', code: 'Enter' });

    expect(props.goToResultPage).not.toHaveBeenCalled();
  });

  it('calls "go to result page" when the Enter key is pressed and the search term is not empty', () => {
    const props: SearchContextData = {
      ...defaultProps,
      termToSearch: 'lion',
    };
    render(<HomePage />, { wrapper: getProvider(props) });

    const inputComponent = screen.getByTestId('input-search-component');
    fireEvent.keyDown(inputComponent, { key: 'Enter', code: 'Enter' });

    expect(props.goToResultPage).toHaveBeenCalled();
  });
});
