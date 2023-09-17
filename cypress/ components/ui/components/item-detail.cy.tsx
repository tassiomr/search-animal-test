import * as React from 'react';
import { ResultModel } from '@domain/models/result.model';
import { ItemDetail } from '@ui/components';
import { MountStyles } from '../../utils/mount-style';
import { faker } from '@faker-js/faker';

const item: ResultModel = {
  id: 1,
  title: faker.animal.bird(),
  url: faker.internet.url(),
  description: faker.lorem.sentences(),
  type: '',
  image: faker.image.urlLoremFlickr({ width: 642, height: 320 }),
};

describe('ItemDetail Component', () => {
  it('should render the ItemDetail component with the provided testId', () => {
    cy.mount(
      <MountStyles>
        <ItemDetail onClose={() => {}} item={item} testId="custom-item-detail" />
      </MountStyles>
    );

    cy.get('[data-testid=custom-item-detail]').should('exist');
    cy.get('.item-detail-container').should('exist');

    cy.get('h1').should('to.contain.text', item.title);
    cy.get('p').should('to.contain.text', item.description);
    cy.get('h3').should('to.contain.text', item.url);

    cy.get('[data-testid="image-item-detail"]')
      .should('have.prop', 'src', item.image)
      .and('have.prop', 'alt', item.title);
  });
});
