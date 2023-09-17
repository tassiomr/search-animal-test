import { faker } from '@faker-js/faker';
export const defaultProps = {
  isLoading: false,
  termToSearch: '',
  setTermToSearch: () => {},
  clearTermToSearch: () => {},
  items: [],
  goToResultPage: () => {},
  selectedAnimal: null,
  getResults: () => {},
  errorMessage: null,
  setAnimal: () => {},
};

export const mockedAnimal = {
  id: 1,
  image: faker.image.urlLoremFlickr({ width: 642, height: 320 }),
  description: faker.lorem.sentences(),
  url: faker.internet.url(),
  type: faker.animal.bear(),
  title: faker.animal.type(),
};
