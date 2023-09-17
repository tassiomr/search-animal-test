import { Button } from '@ui/components';
import * as React from 'react';
import { MountStyles } from '../../utils/mount-style';

const bgColorEnabled = 'rgb(248, 249, 250)';
const bgColorDisabled = 'rgb(227, 230, 232)';
const txColorEnabled = 'rgb(60, 64, 67)';
const txColorDisabled = 'rgb(255, 255, 255)';

describe('Button Component Test Suite', () => {
  it('should render a button with a label "Search" and disabled', () => {
    const label = 'Search';
    const isDisabled = true;
    const onClick = cy.stub().as('click');
    cy.mount(
      <MountStyles>
        <Button onClick={onClick} label={label} isDisabled={isDisabled} />
      </MountStyles>
    );

    cy.get('button')
      .contains(label)
      .and('have.css', 'background-color', bgColorDisabled)
      .and('have.css', 'color', txColorDisabled)
      .and('be.disabled', isDisabled);

    cy.get('@click').should('not.be.called');
  });

  it('should render a button with a label "Search" and enabled', () => {
    const label = 'Search';
    const isDisabled = false;
    const onClick = cy.stub().as('click');
    cy.mount(<Button onClick={onClick} label={label} isDisabled={isDisabled} />);

    cy.get('button')
      .contains(label)
      .and('have.css', 'background-color', bgColorEnabled)
      .and('have.css', 'color', txColorEnabled)
      .should('not.be.disabled', isDisabled)
      .click();

    cy.get('@click').should('be.called');
  });
});
