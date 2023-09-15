import { SearchProvider, useSearchContext } from '@app/contexts/search.context';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

const renderWithContext = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <SearchProvider>{component}</SearchProvider>
    </BrowserRouter>
  );
};

const ComponentTest = () => {
  const context = useSearchContext();

  const handleSetTerm = () => {
    context.setTermToSearch('bird');
  };

  const handleClear = () => {
    context.clearTermToSearch();
  };

  const handleSelectAnAnimal = () => {
    context.setAnimal({
      id: 1,
      image: 'image.png',
      description: 'description',
      url: 'url',
      type: 'type',
      title: 'tit;e',
    });
  };

  const handleErrorButton = () => {
    context.setTermToSearch('tomorrowland');
  };

  const handleNavigate = () => {
    context.goToResultPage();
  };

  const handleGetResults = () => {
    context.getResults();
  };

  useEffect(() => {
    if (context.termToSearch.length) context.getResults();
  }, [context.termToSearch]);

  return (
    <div>
      <div data-testid="isLoading">{context.isLoading.toString()}</div>
      <div data-testid="termToSearch">{context.termToSearch}</div>
      <div data-testid="selectedAnimal">{context?.selectedAnimal ? 'Selected' : 'Not Selected'}</div>
      <div data-testid="errorMessage">{context.errorMessage?.message}</div>
      <div data-testid="items">{context.items.length}</div>
      <button onClick={handleSetTerm}>SetTermButton</button>
      <button onClick={handleClear}>ClearTermButton</button>
      <button onClick={handleSelectAnAnimal}>SelectAnimalButton</button>
      <button onClick={handleErrorButton}>ErrorButton</button>
      <button onClick={handleNavigate}>NavigateButton</button>
      <button onClick={handleGetResults}>GetResults</button>
    </div>
  );
};

describe('Search Context Test Suite', () => {
  beforeEach(() => {
    renderWithContext(<ComponentTest />);
  });

  it('should initialize with correct default values', () => {
    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('');
    expect(screen.getByTestId('items')).toHaveTextContent('0');
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Not Selected');
  });

  it('should call "getResults" with an empty search term and maintain initial values', async () => {
    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');

    userEvent.click(screen.getByText('GetResults'));
    expect(screen.getByTestId('isLoading')).toHaveTextContent('true');

    await waitFor(() => expect(screen.getByTestId('isLoading')).toHaveTextContent('true'));
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('');
    expect(screen.getByTestId('items')).toHaveTextContent('0');
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Not Selected');
  });

  it('should call "getResults" with a search term and maintain initial values', async () => {
    // ... Descrição do teste para chamada de "getResults" com um termo

    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');

    userEvent.click(screen.getByText('GetResults'));
    expect(screen.getByTestId('isLoading')).toHaveTextContent('true');

    await waitFor(() => expect(screen.getByTestId('isLoading')).toHaveTextContent('true'));
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('');
    expect(screen.getByTestId('items')).toHaveTextContent('0');
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Not Selected');
  });

  it('should set the search term to "bird" when "SetTermButton" is clicked', () => {
    userEvent.click(screen.getByText('SetTermButton'));
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('bird');
  });

  it('should clear the search term when "ClearTermButton" is clicked', async () => {
    // ... Descrição do teste para limpar o termo de busca

    userEvent.click(screen.getByText('SetTermButton'));
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('bird');

    userEvent.click(screen.getByText('ClearTermButton'));
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
  });

  it('should select an animal when "SelectAnimalButton" is clicked', () => {
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Not Selected');

    userEvent.click(screen.getByText('SelectAnimalButton'));
    expect(screen.getByTestId('selectedAnimal')).toHaveTextContent('Selected');
  });

  it('should render error message correctly when "ErrorButton" is clicked', async () => {
    expect(screen.getByTestId('errorMessage')).toHaveTextContent('');
    expect(screen.getByTestId('termToSearch')).toHaveTextContent('');
    userEvent.click(screen.getByText('ErrorButton'));

    await waitFor(() => expect(screen.getByTestId('errorMessage')).toHaveTextContent(''));
    await waitFor(() => expect(screen.getByTestId('termToSearch')).toHaveTextContent('tomorrowland'));
  });
});
