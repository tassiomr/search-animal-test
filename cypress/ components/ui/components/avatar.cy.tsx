import { Avatar } from '@ui/components';
import * as React from 'react';

describe('Avatar Component Test, Suite', () => {
  it('should render with url and size correctly', () => {
    const url = 'http://localhost:3000/image.png';
    cy.mount(<Avatar url={url} />);

    cy.get('img')
      .should('have.prop', 'src', url)
      .and('have.css', 'border-radius', '100px')
      .and('have.css', 'width', '50px')
      .and('have.css', 'height', '50px');
  });
});
