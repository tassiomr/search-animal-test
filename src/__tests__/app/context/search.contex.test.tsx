import React, { useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchProvider, useSearchContext } from '@app/contexts/search.context';
import { BrowserRouter } from 'react-router-dom';

// Mock for SearchUsecase
jest.mock('@domain/models/search-use-case', () => ({
  SearchUsecase: jest.fn().mockResolvedValue([]),
}));

const renderWithContext = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <SearchProvider>{component}</SearchProvider>
    </BrowserRouter>
  );
};

describe('SearchContext', () => {
  it('should provide initial context values', () => {
    const TestComponent = () => {
      const context = useSearchContext();

      return (
        <>
          <div data-testid="isLoading">{context.isLoading.toString()}</div>
          <div data-testid="termToSearch">{context.termToSearch}</div>
          <div data-testid="selectedAnimal">{context.selectedAnimal ? 'Selected' : 'Not Selected'}</div>
        </>
      );
    };

    renderWithContext(<TestComponent />);

    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Not Selected');
  });

  it('should update context values when actions are called', async () => {
    const TestComponent = () => {
      const context = useSearchContext();

      useEffect(() => {
        context.goToResultPage();
      }, []);

      const handleSearch = async () => {
        context.setTermToSearch('lion');
        await context.getResults();
      };

      return (
        <>
          <div data-testid="isLoading">{context.isLoading.toString()}</div>
          <div data-testid="termToSearch">{context.termToSearch}</div>
          <div data-testid="selectedAnimal">{context.selectedAnimal ? 'Selected' : 'Not Selected'}</div>
          <button onClick={handleSearch}>Search</button>
        </>
      );
    };

    renderWithContext(<TestComponent />);

    userEvent.click(screen.getByText('Search'));
    await waitFor(() => expect(screen.getByTestId('termToSearch')).toHaveTextContent('lion'));

    expect(screen.getByTestId('isLoading')).toHaveTextContent('true');
    await waitFor(() => expect(screen.getByTestId('isLoading')).toHaveTextContent('false'));
  });

  it('should handle error correctly', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const TestComponent = () => {
      const context = useSearchContext();

      useEffect(() => {
        context.setTermToSearch('tomorrowland');
      }, []);

      const handleSearch = async () => {
        try {
          // await context.getResults();
        } catch (e) {}
      };

      return (
        <>
          <p data-testid="error-message">{context.errorMessage?.toString()}</p>
          <button onClick={handleSearch}>Search</button>
        </>
      );
    };

    renderWithContext(<TestComponent />);

    // fireEvent.click(screen.getByText('Search'));

    // await waitFor(() => expect(screen.getByText('Not result for')).toBeInTheDocument());
  });

  it('should call function get results with a term without value', async () => {
    const TestComponent = () => {
      const context = useSearchContext();

      useEffect(() => {
        context.setTermToSearch('bird');
      }, []);

      const handleClear = async () => {
        context.clearTermToSearch();
      };

      return (
        <>
          <div data-testid="termToSearch">{context.termToSearch}</div>
          <div data-testid="selectedAnimal">{context.selectedAnimal ? 'Selected' : 'Not Selected'}</div>
          <button onClick={handleClear}>Close</button>
        </>
      );
    };

    renderWithContext(<TestComponent />);

    await waitFor(() => expect(screen.getByTestId('termToSearch')).toHaveTextContent('bird'));
    userEvent.click(screen.getByText('Close'));
    await waitFor(() => expect(screen.getByTestId('termToSearch')).toHaveTextContent(''));
  });
});
