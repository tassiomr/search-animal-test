import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultPage } from '@ui/pages';
import { SearchContext, SearchContextData } from '@app/context/search.context';
import { constants } from '@app/configs';

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
  goToResultPage: jest.fn(),
  selectedItem: null,
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

  it('should render  just loading component when isLoading property is true on body container return 1 child', () => {
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: true }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const loadingComponent = container.children.item(0);

    expect(loadingComponent?.getAttribute('data-testid')).toBe('result-page-loading');
  });

  it('should render all feedback message when is loading is false and term has a wrong value', () => {
    const term = 'bird';
    render(<ResultPage />, { wrapper: getProvider({ ...defaultProps, isLoading: false, termToSearch: term }) });

    const container = screen.getByTestId('result-container-body');
    expect(container.children.length).toBe(1);
    const feebackComponent = container.children.item(0);

    expect(feebackComponent?.getAttribute('data-testid')).toBe('result-page-feedback');
    expect(feebackComponent?.children.length).toBe(2);

    const headerFeedbackMessage = feebackComponent?.children.item(0);
    expect(headerFeedbackMessage).toHaveTextContent(
      constants.resultPage.feedbackMessage.feedbackNotTerm.message + ' ' + term
    );
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
});
