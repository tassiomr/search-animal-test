import * as React from 'react';
import { Header } from '@ui/components';
import { Mount } from '../utils/mount';

describe('Header Component Suite Teste', () => {
  const titleString = 'Testing Header';
  beforeEach(() => {
    cy.mount(
      <Mount>
        <Header>
          <p>{titleString}</p>
        </Header>
      </Mount>
    );
  });

  it('renders the Header component with the default testId', () => {
    cy.get("[data-testid='header'").should('exist');
  });

  it('render the left content correctly', () => {
    cy.get('.avatar-icon-container').should('have.length', 1).children().should('have.length', 2);
  });

  it('should render the children content', () => {
    cy.get('p').should('have.text', titleString);
  });
});
