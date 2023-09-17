/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ResultModel } from '@domain/models/result.model';
import { faker } from '@faker-js/faker';

const getImage = (type: string) =>
  faker.image.urlLoremFlickr({ category: type, width: 644, height: 362 });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences({ max: 2, min: 2 });
/* @ts-ignore */
const getTitle = (type: string) => faker.animal[type]();

export const data: ResultModel[] = Array.from({ length: 1000 }, (_, index) => {
  const type = getType();

  return {
    type,
    title: getTitle(type),
    id: index + 1,
    url: getUrl(),
    description: getText(),
    image: getImage(type),
  };
});
