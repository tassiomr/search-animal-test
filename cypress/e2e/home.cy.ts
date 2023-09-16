describe('Home Page Test Suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should disable the button when there is no text in the input and enable it with input text', () => {
    const button = cy.get('button');
    button.should('be.disabled');

    const input = cy.get('input');
    input.type('tomorrowland').then(() => {
      button.should('not.be.disabled');
    });

    input.clear();
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

  it('should allow the user to enter text and erase it using the clear button', () => {
    cy.get('input').focus();
    cy.get('input').type('lolapalloza');

    const clearButton = cy.get('[data-testid=clean-icon-button]');
    clearButton.click();
  });

  it('should allow the user to enter a valid animal type and click the search button', () => {
    const button = cy.get('button');
    button.should('to.disabled');

    const input = cy.get('input');
    input.focus();
    input.type('bird').then(() => {
      button.should('not.to.disabled');
      button.click();
    });
  });

  it('should allow the user to enter a valid name of an animal and click the search button', () => {
    const button = cy.get('button');
    button.should('to.disabled');

    const input = cy.get('input');
    input.focus();
    input.type('gg').then(() => {
      button.should('not.to.disabled');
      button.click();
    });
  });

  it.only('should allow the user to enter a valid name of an animal and click the search button', () => {
    const button = cy.get('button');
    button.should('to.disabled');

    const input = cy.get('input');
    input.focus();
    input.type('good game').then(() => {
      button.should('not.to.disabled');
      button.click();
    });
  });
});
