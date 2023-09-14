import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultPage } from '@ui/pages';

describe('ResultPage Component', () => {
  it('should render the ResultPage component', () => {
    render(<ResultPage />);
    const resultPageElement = screen.getByTestId('result-page');
    expect(resultPageElement).toBeInTheDocument();
  });

  it('should render the header with the search component', () => {
    render(<ResultPage />);
    const headerElement = screen.getByTestId('result-page-header');
    expect(headerElement).toBeInTheDocument();
    const searchComponentElement = screen.getByTestId('search-component-result-page');
    expect(searchComponentElement).toBeInTheDocument();
  });

  it('should render the body with feedback message, loading, result list, and item detail', () => {
    render(<ResultPage />);
    const bodyElement = screen.getByTestId('result-container-body');
    expect(bodyElement).toBeInTheDocument();
    const feedbackMessageElement = screen.getByTestId('result-page-feedback');
    expect(feedbackMessageElement).toBeInTheDocument();
    const loadingElement = screen.getByTestId('result-page-loading');
    expect(loadingElement).toBeInTheDocument();
    const resultListElement = screen.getByTestId('result-page-list');
    expect(resultListElement).toBeInTheDocument();
    const itemDetailElement = screen.getByTestId('item-detail');
    expect(itemDetailElement).toBeInTheDocument();
  });
});
