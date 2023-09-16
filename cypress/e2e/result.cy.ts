describe('Result Page Test Suite', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/result');
  });

  it('should open with loading screen and return 1 child from page', () => {
    const container = cy.get('.result-container-body');

    container.should('have.length', 1);
  });

  it('should open with search a animal by type screen and return 1 child from page', () => {
    const input = cy.get('input');

    input.type('bird').then(() => {
      input.trigger('keydown', { key: 'Enter' });
    });

    const container = cy.get('.result-container-body');
    container.should('have.length', 1);
  });

  it('should open with search a animal screen and return 1 child from page', () => {
    const input = cy.get('input');

    input.type('bird').then(() => {
      input.trigger('keydown', { key: 'Enter' });
    });

    const container = cy.get('.result-container-body');
    container.should('have.length', 1);
  });

  it('should open with search a animal screen and click on first child', () => {
    const input = cy.get('input');

    input.type('cat').then(() => {
      input.trigger('keydown', { key: 'Enter' });
    });

    const resultList = cy.get('[data-testid="result-page-list"]');
    resultList.should('have.length.greaterThan', 0);

    const itemClickable = resultList.first().find('h1').first();
    itemClickable.click();
  });

  it('should close details when click in screen with modal is visible', () => {
    cy.viewport(620, 400);
    const input = cy.get('input');

    input.type('crocodilia').then(() => {
      input.trigger('keydown', { key: 'Enter' });
    });

    const resultList = cy.get('[data-testid="result-page-list"]');
    resultList.should('have.length.greaterThan', 0);

    const resultItemContainer = resultList.first().get('.result-item-container');
    const titlesButton = resultItemContainer.first().get('h1');

    titlesButton.first().click();

    const itemDetail = cy.get('.item-detail-container');
    itemDetail.click();
  });

  it('should open with search a animal screen and click on first child', () => {
    const input = cy.get('input');

    input.type('snake').then(() => {
      input.trigger('keydown', { key: 'Enter' });
    });

    const resultList = cy.get('[data-testid="result-page-list"]');
    resultList.should('have.length.greaterThan', 0);

    const resultItemContainer = resultList.first().get('.result-item-container');
    const titlesButton = resultItemContainer.first().get('h1');

    titlesButton.first().click();
  });

  it('should clear input component', () => {
    const input = cy.get('input');
    input.type('good game').then(() => {
      input.clear();
    });
  });
  it('should change clear button class when input has no text and enable it with input text', () => {
    const input = cy.get('input');
    const clearButton = cy.get('[data-testid="clean-icon-button"]');

    clearButton.should('have.class', 'icons-search-component--none');
    clearButton.should('not.have.class', 'icons-search-component-none');

    input.type('tomorrowland').then(() => {
      clearButton.should('not.have.class', 'icons-search-component--none');
      clearButton.should('have.class', 'icons-search-component');
    });

    clearButton.click();

    clearButton.should('have.class', 'icons-search-component--none');
    clearButton.should('not.have.class', 'icons-search-component');
  });
});
