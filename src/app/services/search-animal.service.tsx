import { ResultModel } from '@domain/models/result.model';
import { TextRegexTest } from '@app/utils/regex';
import { constants } from '@app/configs';
import { NotFoundError } from '@domain/validators/error';

import { data } from '@data/seeds';

interface ISeachAnimalService {
  getAnimals(term: string): Promise<ResultModel[]>;
}

export class SearchAnimalService implements ISeachAnimalService {
  getAnimals(term: string): Promise<ResultModel[]> {
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
  }
}

export default new SearchAnimalService();
