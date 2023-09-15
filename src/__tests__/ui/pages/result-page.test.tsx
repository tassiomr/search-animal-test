import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ResultPage } from '@ui/pages';
import { SearchContext, SearchContextData } from '@app/contexts/search.context';
import { constants } from '@app/configs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Provider: React.FC<{ children: React.ReactNode; value: SearchContextData }> = ({ children, value }) => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <SearchContext.Provider
          value={{
            ...value,
          }}
        >
          {children}
        </SearchContext.Provider>
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
};

const defaultProps: SearchContextData = {
  isLoading: false,
  termToSearch: '',
  setTermToSearch: jest.fn(),
  clearTermToSearch: jest.fn(),
  items: [],
  goToResultPage: jest.fn(),
  selectedAnimal: null,
  getResults: jest.fn(),
  errorMessage: null,
  setAnimal: jest.fn(),
};

const mockedAnimal = {
  id: 1,
  image: 'image.png',
  description: 'description',
  url: 'url',
  type: 'type',
  title: 'title',
};

const getProvider =
  (value: SearchContextData = defaultProps) =>
  ({ children }: { children: React.ReactNode }) => <Provider value={value}>{children}</Provider>;

describe('ResultPage Component', () => {
  it('should render the ResultPage component', () => {
    render(<ResultPage />, { wrapper: getProvider() });
    const resultPageElement = screen.getByTestId('result-page');
    expect(resultPageElement).toBeInTheDocument();
  });

  it('should render the header with the search component', () => {
    render(<ResultPage />, { wrapper: getProvider() });
    const headerElement = screen.getByTestId('result-page-header');
    expect(headerElement).toBeInTheDocument();
    const searchComponentElement = screen.getByTestId('search-component-result-page');
    expect(searchComponentElement).toBeInTheDocument();
  });

  it('should render  just loading component when isLoading property is true', () => {
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: true }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const loadingComponent = container.children.item(0);

    expect(loadingComponent?.getAttribute('data-testid')).toBe('result-page-loading');
  });

  it('should render all feedback message when is loading is false and term has a wrong value', () => {
    const term = 'bird';
    const errorMessage = {
      message: constants.errors.noResultFor,
      span: term,
    };
    render(<ResultPage />, {
      wrapper: getProvider({ ...defaultProps, isLoading: false, termToSearch: term, errorMessage }),
    });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const feebackComponent = container.children.item(0);

    expect(feebackComponent?.getAttribute('data-testid')).toBe('result-page-feedback');
    expect(feebackComponent?.children.length).toBe(2);

    const headerFeedbackMessage = feebackComponent?.children.item(0);
    expect(headerFeedbackMessage).toHaveTextContent(constants.errors.noResultFor + ' ' + term);
    const suggestionFeedbackMessage = feebackComponent?.children.item(1);
    expect(suggestionFeedbackMessage).toHaveTextContent(
      constants.resultPage.feedbackMessage.feedbackTryIt.message +
        ' ' +
        constants.resultPage.feedbackMessage.feedbackTryIt.span
    );
  });

  it('should render just feedback message to try terms when is loading is false and term has a empty value', () => {
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: false }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const feebackComponent = container.children.item(0);

    expect(feebackComponent?.getAttribute('data-testid')).toBe('result-page-feedback');
    expect(feebackComponent?.children.length).toBe(1);

    const suggestionFeedbackMessage = feebackComponent?.children.item(0);
    expect(suggestionFeedbackMessage).toHaveTextContent(
      constants.resultPage.feedbackMessage.feedbackTryIt.message +
        ' ' +
        constants.resultPage.feedbackMessage.feedbackTryIt.span
    );
  });

  it('should render only item list when list has values and selected item is null ', () => {
    render(<ResultPage />, {
      wrapper: getProvider({
        ...defaultProps,
        isLoading: false,
        items: [
          {
            id: 1,
            image: 'image.png',
            description: 'description',
            url: 'url',
            type: 'type',
            title: 'title',
          },
        ],
      }),
    });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const resultListComponent = container.children.item(0);

    expect(resultListComponent?.getAttribute('data-testid')).toBe('result-page-list');
    expect(resultListComponent?.children.length).toBe(1);
  });

  it('should render only item list when list has values and selected item is not null ', () => {
    render(<ResultPage />, {
      wrapper: getProvider({
        ...defaultProps,
        selectedAnimal: mockedAnimal,
        isLoading: false,
        items: [mockedAnimal],
      }),
    });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(2);
    const resultListComponent = container.children.item(0) as HTMLElement;

    expect(resultListComponent?.getAttribute('data-testid')).toBe('result-page-list');
    expect(resultListComponent?.children.length).toBe(1);

    const itemDetailComponent = container.children.item(1);
    expect(itemDetailComponent?.getAttribute('data-testid')).toBe('item-detail');
    expect(itemDetailComponent?.children.length).toBe(1);

    const titleItemClickComponent = screen.getByTestId('item-title-1');
    fireEvent.click(titleItemClickComponent);
    expect(defaultProps.setAnimal).toHaveBeenCalled();
  });

  it('should testing search actions component in result page', () => {
    render(<ResultPage />, { wrapper: getProvider() });

    const inputComponent = screen.getByTestId('input-search-component');

    fireEvent.change(inputComponent, { target: { value: 'value' } });
    expect(defaultProps.setTermToSearch).toHaveBeenCalled();

    fireEvent.keyDown(inputComponent, { key: 'Enter', code: 'Enter' });
    expect(defaultProps.getResults).toHaveBeenCalled();

    fireEvent.keyDown(inputComponent, { key: 'A', code: 'A' });
    // called two time because this function is used in component first render
    expect(defaultProps.getResults).toBeCalledTimes(2);

    const clearButtonComponent = screen.getByTestId('clean-icon-button');
    fireEvent.click(clearButtonComponent);
    expect(defaultProps.clearTermToSearch).toHaveBeenCalled();
  });
});
