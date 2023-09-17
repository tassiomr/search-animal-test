import { constants } from '@app/configs/constants';
describe('User Error Invalid Term Test Suite', () => {
  it('should user receive an error when search an invalid animal', () => {
    cy.visit('/');
    const value = 'tomorrowland';

    /* HOME PAGE */

    const input = cy.get('input');
    const button = cy.get('button');

    input.type(value).then(() => {
      input.should('have.value', value);
      button.click();
    });

    /* RESULT PAGE */
    cy.get('[data-testid="result-page-loading"]')
      .should('exist')
      .and('have.have.length', 1)
      .children()
      .and('have.length', 10);

    /* FEEDBACK MESSAGE */

    const {
      feedbackTryIt: { message, span },
    } = constants.resultPage.feedbackMessage;
    const { noResultFor } = constants.errors;

    cy.get('[data-testid="result-page-feedback"]').should('exist').children().should('have.have.length', 2);
    cy.get('[data-testid="result-page-feedback-p1"]').first().contains(`${noResultFor} '${value}'`);
    cy.get('[data-testid="result-page-feedback-p2"]').first().contains(`${message} ${span}`);

    /* INPUT CONTEXT */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });
});
