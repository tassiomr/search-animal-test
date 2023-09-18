import { Animal } from '@app/models/animal.model';
import { ResultModel } from '@data/models/result.model';

export const animalAdapter = (resultModel: ResultModel): Animal => {
  return {
    id: resultModel.id,
    type: resultModel.type,
    title: resultModel.title,
    image: resultModel.image,
    url: resultModel.url,
    description: resultModel.description,
  };
};
