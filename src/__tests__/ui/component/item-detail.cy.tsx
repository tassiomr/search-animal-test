import { ResultModel } from '@domain/models/result.model';
import { ItemDetail } from '@ui/components';
import { Mount } from '../../../../cypress/utils/mount';
import * as React from 'react';
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
      <Mount>
        <ItemDetail item={item} testId="custom-item-detail" />
      </Mount>
    );

    cy.get('[data-testid=custom-item-detail]').should('exist');
    cy.get('.item-detail-container').should('exist');

    cy.get('h1').should('to.contain.text', item.title);
    cy.get('p').should('to.contain.text', item.description);
    cy.get('h3').should('to.contain.text', item.url);

    cy.get('[data-testid="image-item-detail"]')
      .should('has.a.have.prop', 'src', item.image)
      .and('has.a.have.a.prop', 'alt', item.title);
  });
});
