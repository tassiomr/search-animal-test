import { SearchContextData } from '@app/contexts/search.context';

export const defaultProps: SearchContextData = {
  isLoading: false,
  termToSearch: '',
  setTermToSearch: jest.fn(),
  clearTermToSearch: jest.fn(),
  items: [],
  goToResultPage: jest.fn(),
  selectedAnimal: null,
  getResults: jest.fn(),
  errorMessage: null,
  setAnimal: jest.fn(),
};

export const mockedAnimal = {
  id: 1,
  image: 'image.png',
  description: 'description',
  url: 'url',
  type: 'type',
  title: 'title',
};
