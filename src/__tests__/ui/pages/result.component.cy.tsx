import { SearchContext, SearchContextData } from '@app/contexts/search.context';
import { ResultPage } from '@ui/pages';
import { MountStyles } from '@__tests__/__utils__/mount-style';
import { data, item } from '@__mocks__/search.context.mock';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { constants } from '@app/configs';
import { ResultModel } from '@domain/models/result.model';

const Provider = ({ props }: { props: Partial<SearchContextData> }) => {
  return (
    <MountStyles>
      <SearchContext.Provider value={{ ...data, ...props }}>
        <ResultPage />
      </SearchContext.Provider>
    </MountStyles>
  );
};

describe('Result Component Test Suite', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('should search results', () => {
    const value = 'clear';
    const isLoading = true;
    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Provider props={{ isLoading, termToSearch: value }} />} />
        </Routes>
      </MemoryRouter>
    );

    /* LOADING RENDER */
    cy.get('[data-testid="result-page-loading"]')
      .should('exist')
      .and('have.have.length', 1)
      .children()
      .and('have.length', 10);

    /* INPUT STATE */

    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });

  it('should search results finish', () => {
    const value = 'bird';
    const isLoading = false;
    const items = [item, item, item];
    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider
                props={{
                  isLoading,
                  termToSearch: value,
                  items,
                  selectedAnimal: null,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    /* ITEM LIST */
    cy.get('[data-testid="result-page-list"]')
      .should('exist')
      .and('have.have.length', 1)
      .children()
      .and('have.length', items.length);

    cy.get('h1').first().should('have.text', item.title);
    cy.get('h3').first().should('have.text', item.url);
    cy.get('p').first().should('have.text', item.description);

    /* INPUT STATE */

    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });

  it('should click on one result', () => {
    const value = 'bird';
    const isLoading = false;
    const items = [item, item, item];
    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider
                props={{
                  isLoading,
                  termToSearch: value,
                  items,
                  selectedAnimal: item,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    /* ITEM LIST */
    cy.get('[data-testid="result-page-list"]')
      .should('exist')
      .and('have.have.length', 1)
      .children()
      .and('have.length', items.length);

    cy.get('h1').first().should('have.text', item.title);
    cy.get('h3').first().should('have.text', item.url);
    cy.get('p').first().should('have.text', item.description);

    /* ITEM DETAIL */
    cy.get('[data-testid="item-detail-search"]').should('exist').and('have.have.length', 1);
    cy.get('[data-testid="item-detail-search"]').find('h1').should('have.text', item.title);
    cy.get('[data-testid="item-detail-search"]').find('h3').should('have.text', item.url);
    cy.get('[data-testid="item-detail-search"]').find('p').should('have.text', item.description);
    cy.get('[data-testid="item-detail-search"]').find('img').should('have.prop', 'src', item.image);

    /* INPUT STATE */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });

  it.only('should when start search without search term', () => {
    const value = '';
    const isLoading = false;
    const items = [];
    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider
                props={{
                  isLoading,
                  termToSearch: value,
                  items,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const {
      feedbackTryIt: { message, span },
    } = constants.resultPage.feedbackMessage;

    /* ITEM LIST */
    cy.get('[data-testid="result-page-feedback"]').should('exist').children().should('have.have.length', 1);
    cy.get('[data-testid="result-page-feedback-p2"]').first().contains(`${message} ${span}`);

    /* INPUT STATE */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component--none');
  });

  it.only('should searching and receiving no results', () => {
    const value = 'bird';
    const isLoading = false;
    const items: ResultModel[] = [];
    const errorMessage = {
      message: constants.errors.noResultFor,
      span: value,
    };

    cy.mount(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider
                props={{
                  isLoading,
                  termToSearch: value,
                  items,
                  errorMessage,
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const {
      feedbackTryIt: { message, span },
    } = constants.resultPage.feedbackMessage;
    const { noResultFor } = constants.errors;

    /* ITEM LIST */
    cy.get('[data-testid="result-page-feedback"]').should('exist').children().should('have.have.length', 2);
    cy.get('[data-testid="result-page-feedback-p1"]').first().contains(`${noResultFor} '${value}'`);
    cy.get('[data-testid="result-page-feedback-p2"]').first().contains(`${message} ${span}`);

    /* INPUT STATE */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });
});
