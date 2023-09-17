import React from 'react';
import './styles.css';
import { Item } from '@ui/components/item';
import { Animal } from '@app/models/animal.model';
import { ItemDetail } from '@ui/components';

type Props = {
  item: Animal | null;
  animals: Animal[];
  onClick: (animal: Animal) => void;
  onClose: () => void;
  isVisible: boolean;
};

export const ResultList: React.FC<Props> = ({
  item,
  animals,
  onClick,
  onClose,
  isVisible,
}) => {
  if (!isVisible) return null;
  return (
    <div
      className="result-list-container default-body-style"
      data-testid="result-page-list"
    >
      <div data-testid="result-page-wrapper">
        {animals.map((animal) => {
          return (
            <Item
              item={animal}
              key={animal.id}
              id={animal.id}
              onClick={() => onClick(animal)}
            />
          );
        })}
      </div>
      <aside data-testid="result-page-item-detail">
        <ItemDetail
          item={item!}
          onClose={onClose}
          testId="item-detail-search"
        />
      </aside>
    </div>
  );
};
