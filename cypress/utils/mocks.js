export const defaultProps = {
  isLoading: false,
  termToSearch: '',
  setTermToSearch: cy.stubs(),
  clearTermToSearch: cy.stubs(),
  items: [],
  goToResultPage: cy.stubs(),
  selectedAnimal: null,
  getResults: cy.stubs(),
  errorMessage: null,
  setAnimal: cy.stubs(),
};

export const mockedAnimal = {
  id: 1,
  image: 'image.png',
  description: 'description',
  url: 'url',
  type: 'type',
  title: 'title',
};
