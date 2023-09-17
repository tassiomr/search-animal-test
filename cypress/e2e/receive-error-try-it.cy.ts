import { constants } from '@app/configs/constants';

describe('User Error Empty Term Test Suite', () => {
  it('should user receive an erro when search an invalid animal', () => {
    cy.visit('/result');

    /* FEEDBACK MESSAGE */

    const {
      feedbackTryIt: { message, span },
    } = constants.resultPage.feedbackMessage;

    cy.get('[data-testid="result-page-feedback"]').children().should('have.have.length', 1);
    cy.get('[data-testid="result-page-feedback-p2"]').first().contains(`${message} ${span}`);

    /* INPUT CONTEXT */
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', '');
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component--none');
  });
});
