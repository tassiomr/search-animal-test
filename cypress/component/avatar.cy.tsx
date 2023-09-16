// test: button component with cy refacto?r

import { Avatar } from '@ui/components';
import React from 'react';

describe('Avatar Component Test, Suite', () => {
  it('should render with url and size correctly', () => {
    const url = 'http://localhost:3000/image.png';
    cy.mount(<Avatar url={url} />);

    const img = cy.get('img');
    img
      .should('has.a.have.prop', 'src', url)
      .and('have.css', 'border-radius', '100px')
      .and('have.css', 'width', '50px')
      .and('have.css', 'height', '50px');
  });
});
