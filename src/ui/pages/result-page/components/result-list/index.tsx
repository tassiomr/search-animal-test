import React from 'react';
import './styles.css';
import { Item } from '@ui/components/item';

import { ResultModel as Animal } from '@/domain/models/result.model';

type Props = {
  animals: Animal[];
  onClick: (animal: Animal) => void;
};

export const ResultList: React.FC<Props> = ({ animals, onClick }) => {
  return (
    <div className="result-list-container" data-testid="result-page-list">
      {animals.map((animal) => {
        return <Item item={animal} key={animal.id} id={animal.id} onClick={() => onClick(animal)} />;
      })}
    </div>
  );
};
