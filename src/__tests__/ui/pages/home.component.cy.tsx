import { SearchContext, SearchContextData } from '@app/contexts/search.context';
import { HomePage } from '@ui/pages';
import { MountStyles } from '@__tests__/__utils__/mount-style';

const bgColorEnabled = 'rgb(248, 249, 250)';
const bgColorDisabled = 'rgb(227, 230, 232)';
const txColorEnabled = 'rgb(60, 64, 67)';
const txColorDisabled = 'rgb(255, 255, 255)';

describe('Home Page Teste Suite', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('render with a initial state', () => {
    cy.mount(
      <MountStyles>
        <SearchContext.Provider value={{ termToSearch: '', goToResultPage: () => {} } as SearchContextData}>
          <HomePage />
        </SearchContext.Provider>
      </MountStyles>
    );

    /* BUTTON STATE */

    cy.get('button')

      .contains('Search')
      .and('have.css', 'background-color', bgColorDisabled)
      .and('have.css', 'color', txColorDisabled)
      .and('be.disabled', true);

    /* INPUT STATE */

    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', '');
  });

  it('render with a input has a value', () => {
    const value = 'bird';
    const goToResultPage = cy.stub().as('click') as () => void;

    cy.mount(
      <MountStyles>
        <SearchContext.Provider value={{ termToSearch: value, goToResultPage } as SearchContextData}>
          <HomePage />
        </SearchContext.Provider>
      </MountStyles>
    );
    /* BUTTON STATE */

    cy.get('button')
      .contains('Search')
      .and('have.css', 'background-color', bgColorEnabled)
      .and('have.css', 'color', txColorEnabled)
      .should('not.be.disabled', true)
      .click();

    cy.get('@click').should('be.called');

    /* INPUT STATE */

    cy.get('.input-container').should('exist');
    cy.get('.input-wrapper').should('exist');
    cy.get('input').should('exist').and('have.value', value);
    cy.get('[data-testid=clean-icon-button').should('have.class', 'icons-input-component');
  });
});
