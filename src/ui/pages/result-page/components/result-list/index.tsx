import React from 'react';
import './styles.css';
import { Item } from '@ui/components/item';

import { ResultModel } from '../../../../../models/result.model';

type Props = {
  animals: ResultModel[];
};

export const ResultList: React.FC<Props> = ({ animals }) => {
  return (
    <div className="result-list-container" data-testid="result-page-list">
      {animals.map((animal) => {
        return <Item item={animal} />;
      })}
    </div>
  );
};
