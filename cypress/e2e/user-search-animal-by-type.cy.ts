describe('User Search Animal Name Test Suit', () => {
  it('should user can see the animal search and detail', () => {
    cy.visit('/');

    const value = 'gg';

    cy.get('input')
      .type(value)
      .then(() => {
        cy.get('button').click();
      });

    /* RESULT PAGE */

    /* LOADING */
    cy.get('[data-testid="result-page-loading"]')
      .should('exist')
      .and('have.have.length', 1)
      .children()
      .and('have.length', 10);

    /* RESULT LIST */
    cy.get('[data-testid="result-page-list"]').children().should('have.length.greaterThan', 0);

    cy.get('h1').first().should('exist').click();
    cy.get('h3').first().should('exist');
    cy.get('p').first().should('exist');

    /* ITEM DETAIL */
    cy.get('[data-testid="item-detail-search"]').should('exist').and('have.have.length', 1);
    cy.get('[data-testid="item-detail-search"]').find('h1').should('exist');
    cy.get('[data-testid="item-detail-search"]').find('h3').should('exist');
    cy.get('[data-testid="item-detail-search"]').find('p').should('exist');
    cy.get('[data-testid="item-detail-search"]').find('img').should('exist');

    /* INPUT STATE */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });
});
