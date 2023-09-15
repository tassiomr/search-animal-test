/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ResultModel } from '@domain/models/result.model';
import { faker } from '@faker-js/faker';

const _getTitle = (term: string) => {
  /* @ts-ignore */
  const type = faker.animal[term];

  if (!type) {
    return '';
  }

  return type() as string;
};

export const data = (term: string): ResultModel[] => {
  const title = _getTitle(term);
  if (!title.length) {
    return [];
  }

  const data = [...new Array(100)];

  return data.map((item, index) => ({
    id: index + 1,
    title: title,
    image: faker.image.urlLoremFlickr({ category: 'animal', width: 600, height: 200 }),
    description: faker.lorem.sentence(),
    type: faker.animal.type(),
    url: faker.internet.url(),
  }));
};
