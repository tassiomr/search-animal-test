import { SearchContextData } from '@app/contexts/search.context';
import { faker } from '@faker-js/faker';

export const item = {
  id: 1,
  title: faker.animal.bear(),
  image: faker.image.urlLoremFlickr({ category: 'animal', width: 642, height: 320 }),
  type: faker.animal.type(),
  url: faker.internet.url(),
  description: faker.lorem.sentences(),
};

export const data: SearchContextData = {
  isLoading: false,
  termToSearch: '',
  items: [],
  selectedAnimal: {
    id: 0,
    type: '',
    title: '',
    image: '',
    url: '',
    description: '',
  },
  errorMessage: {
    message: '',
    span: '',
  },
  setTermToSearch: () => {},
  clearTermToSearch: () => {},
  goToResultPage: () => {},
  getResults: () => Promise.resolve(),
  setAnimal: () => {},
};
