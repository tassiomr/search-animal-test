import * as React from 'react';
import { Footer } from '@ui/components';
import { Mount } from '../../../../cypress/utils/mount';
import { constants } from '@app/configs';

describe('Footer Component Suite Teste', () => {
  beforeEach(() => {
    cy.mount(
      <Mount>
        <Footer />
      </Mount>
    );
  });

  it('renders the Footer component with the default testId', () => {
    cy.get('[data-testid="footer"]').should('exist');
  });

  it('renders left info with the correct text', () => {
    cy.get('p').first().should('have.text', constants.footer.enterprise);
  });

  it('renders right info with the correct text', () => {
    cy.get('p').last().should('have.text', constants.footer.version);
  });
});
