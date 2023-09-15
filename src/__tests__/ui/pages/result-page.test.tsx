import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ResultPage } from '@ui/pages';
import { SearchContext, SearchContextData } from '@app/contexts/search.context';
import { constants } from '@app/configs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { mockedAnimal, defaultProps } from '@__mocks__/search.context.mock';

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

const getProvider =
  (value: SearchContextData = defaultProps) =>
  ({ children }: { children: React.ReactNode }) => <Provider value={value}>{children}</Provider>;

describe('ResultPage Component', () => {
  it('renders the ResultPage component', () => {
    render(<ResultPage />, { wrapper: getProvider() });
    const resultPageElement = screen.getByTestId('result-page');
    expect(resultPageElement).toBeInTheDocument();
  });

  it('renders the header with the search component', () => {
    render(<ResultPage />, { wrapper: getProvider() });
    const headerElement = screen.getByTestId('result-page-header');
    expect(headerElement).toBeInTheDocument();
    const searchComponentElement = screen.getByTestId('search-component-result-page');
    expect(searchComponentElement).toBeInTheDocument();
  });

  it('renders only loading component when isLoading property is true', () => {
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: true }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const loadingComponent = container.children.item(0);

    expect(loadingComponent?.getAttribute('data-testid')).toBe('result-page-loading');
  });

  it('renders all feedback messages when isLoading is false and term has an incorrect value', () => {
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
    const feedbackComponent = container.children.item(0);

    expect(feedbackComponent?.getAttribute('data-testid')).toBe('result-page-feedback');
    expect(feedbackComponent?.children.length).toBe(2);

    const headerFeedbackMessage = feedbackComponent?.children.item(0);
    expect(headerFeedbackMessage).toHaveTextContent(constants.errors.noResultFor + ' ' + term);
    const suggestionFeedbackMessage = feedbackComponent?.children.item(1);
    expect(suggestionFeedbackMessage).toHaveTextContent(
      constants.resultPage.feedbackMessage.feedbackTryIt.message +
        ' ' +
        constants.resultPage.feedbackMessage.feedbackTryIt.span
    );
  });

  it('renders only feedback message to try terms when isLoading is false and term has an empty value', () => {
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: false }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const feedbackComponent = container.children.item(0);

    expect(feedbackComponent?.getAttribute('data-testid')).toBe('result-page-feedback');
    expect(feedbackComponent?.children.length).toBe(1);

    const suggestionFeedbackMessage = feedbackComponent?.children.item(0);
    expect(suggestionFeedbackMessage).toHaveTextContent(
      constants.resultPage.feedbackMessage.feedbackTryIt.message +
        ' ' +
        constants.resultPage.feedbackMessage.feedbackTryIt.span
    );
  });

  it('renders only item list when the list has values and the selected item is null', () => {
    render(<ResultPage />, {
      wrapper: getProvider({
        ...defaultProps,
        isLoading: false,
        items: [mockedAnimal],
      }),
    });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const resultListComponent = container.children.item(0);

    expect(resultListComponent?.getAttribute('data-testid')).toBe('result-page-list');
    expect(resultListComponent?.children.length).toBe(1);
  });

  it('renders only item list when the list has values and the selected item is not null', () => {
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
    expect(itemDetailComponent?.getAttribute('data-testid')).toBe('item-detail-search');
    expect(itemDetailComponent?.children.length).toBe(1);

    const titleItemClickComponent = screen.getByTestId('item-title-1');
    userEvent.click(titleItemClickComponent);
    expect(defaultProps.setAnimal).toHaveBeenCalled();
  });

  it('tests search actions component in result page', () => {
    render(<ResultPage />, { wrapper: getProvider() });

    const inputComponent = screen.getByTestId('input-search-component');

    fireEvent.change(inputComponent, { target: { value: 'value' } });
    expect(defaultProps.setTermToSearch).toHaveBeenCalled();

    fireEvent.keyDown(inputComponent, { key: 'Enter', code: 'Enter' });
    expect(defaultProps.getResults).toHaveBeenCalled();

    fireEvent.keyDown(inputComponent, { key: 'A', code: 'A' });
    // called two times because this function is used in component first render
    expect(defaultProps.getResults).toBeCalledTimes(2);

    const clearButtonComponent = screen.getByTestId('clean-icon-button');
    userEvent.click(clearButtonComponent);
    expect(defaultProps.clearTermToSearch).toHaveBeenCalled();
  });

  it('sets animal to null when clicking on item detail', () => {
    render(<ResultPage />, {
      wrapper: getProvider({ ...defaultProps, items: [mockedAnimal], selectedAnimal: mockedAnimal }),
    });
    const inputComponent = screen.getByTestId('item-detail-search');
    userEvent.click(inputComponent);
    expect(defaultProps.setAnimal).toHaveBeenCalled();
  });
});
