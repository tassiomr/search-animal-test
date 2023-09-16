import { Input } from '@ui/components';
import { Mount } from '../utils/mount';
import * as React from 'react';

describe('Input Component Test Suite', () => {
  it('should render with default values', () => {
    cy.mount(
      <Mount>
        <Input onChange={() => {}} onKeyDown={() => {}} value={''} onClose={() => {}} />
      </Mount>
    );

    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', '');
  });

  it('should render with empty value and not render a close icon', () => {
    cy.mount(
      <Mount>
        <Input onChange={() => {}} onKeyDown={() => {}} value={''} onClose={() => {}} />
      </Mount>
    );
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', '');
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component--none');
  });

  it('should render with empty value and render a close icon', () => {
    const value = 'bird';
    cy.mount(
      <Mount>
        <Input onChange={() => {}} onKeyDown={() => {}} value={value} onClose={() => {}} />
      </Mount>
    );
    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', 'bird');
    cy.get('[data-testid="clean-icon-button"').should('have.class', 'icons-input-component');
  });
});
