import * as React from 'react';
import { MountStyles } from '../../utils/mount-style';
import { Item } from '@ui/components';
import { faker } from '@faker-js/faker';
import { ResultModel } from '@data/models/result.model';

describe('Item Component Test Suite', () => {
  it('should render correclty when receive a item', () => {
    const item: ResultModel = {
      id: 1,
      title: faker.animal.bird(),
      url: faker.internet.url(),
      description: faker.lorem.sentences(),
      type: '',
      image: '',
    };

    const onClick = cy.stub().as('click');
    cy.mount(
      <MountStyles>
        <Item item={item} onClick={onClick} />
      </MountStyles>
    );

    cy.get('h1').click();
    cy.get('@click').should('be.called');

    cy.get('h1').should('to.contain.text', item.title);
    cy.get('p').should('to.contain.text', item.description);
    cy.get('h3').should('to.contain.text', item.url);
  });
});
