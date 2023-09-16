import * as React from 'react';
import { Skeleton, SkeletonSizes } from '@ui/components/skeleton';

describe('Skeleton Comonent Test Suit', () => {
  it('should render the Skeleton component with the provided testId', () => {
    cy.mount(<Skeleton limit={1} testId={'custom-skeleton'} />);

    cy.get('div').first().should('have.length', 1);
  });

  it('should render a single small-sized skeleton by default', () => {
    cy.mount(<Skeleton limit={1} testId={'custom-skeleton'} />);

    cy.get('[data-testid="custom-skeleton"]')
      .should('have.length', 1)
      .and('have.class', 'skeleton-loading')
      .and('have.have.class', 'skeleton-size-small');
  });

  it('should render multiple skeletons with the specified limit and size small', () => {
    const limit = 3;
    cy.mount(<Skeleton limit={limit} testId={'custom-skeleton'} />);

    cy.get('.skeleton-size-small').should('length', limit).and('have.class', 'skeleton-loading');
  });

  it('should render multiple skeletons with the specified limit and size medium', () => {
    const limit = 4;
    cy.mount(<Skeleton limit={limit} testId={'custom-skeleton'} size={SkeletonSizes.medium} />);

    cy.get('[data-testid="skeleton-build-container"]')
      .children()
      .should('length', limit)
      .and('have.class', 'skeleton-size-medium')
      .and('have.class', 'skeleton-loading');
  });

  it('should render multiple skeletons with the specified limit and size large', () => {
    const limit = 5;
    cy.mount(<Skeleton limit={limit} testId={'custom-skeleton'} size={SkeletonSizes.medium} />);

    cy.get('[data-testid="skeleton-build-container"]')
      .children()
      .should('length', limit)
      .and('have.class', 'skeleton-size-medium')
      .and('have.class', 'skeleton-loading');
  });
});
