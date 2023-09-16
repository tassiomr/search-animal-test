import { Button } from '@ui/components';
import React from 'react';

describe('Button Component Test Suite', () => {
  it('should render a button with a label "Search" and disabled', () => {
    const label = 'Search';
    const isDisabled = true;
    const onClick = cy.stub().as('click');
    cy.mount(<Button onClick={onClick} label={label} isDisabled={isDisabled} />);

    cy.get('button').contains(label).and('be.disabled', true);

    cy.get('@click').should('not.be.called');
  });

  it('should render a button with a label "Search" and enabled', () => {
    const label = 'Search';
    const isDisabled = false;
    const onClick = cy.stub().as('click');
    cy.mount(<Button onClick={onClick} label={label} isDisabled={isDisabled} />);

    cy.get('button').contains(label).should('not.be.disabled', true);

    cy.get('@click').should('be.called');
  });
});
