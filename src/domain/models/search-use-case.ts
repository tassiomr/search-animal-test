import { constants } from '@app/configs';
import { data } from '@data/seeds';
import { NotFoundError } from '@domain/validators/error';
import { ResultModel } from './result.model';
import { TextRegexTest } from '@domain/validators/regex';

export const SearchUsecase = (term: string): Promise<ResultModel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const search = data.filter((animal) => {
        if (animal.type === term) {
          return animal;
        }

        if (TextRegexTest(term).test(animal.title)) {
          return animal;
        }
      });

      if (search.length) {
        resolve(search);
      }

      reject(new NotFoundError(constants.errors.noResultFor, term));
    }, 100);
  });
};
