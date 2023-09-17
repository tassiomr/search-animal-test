import React from 'react';
import { Item } from '../item';
import './styles.css';
import { Animal } from '@app/models/animal.model';

type Props = {
  item: Animal;
  testId?: string;
  onClose: () => void;
};

export const ItemDetail: React.FC<Props> = ({ item, onClose, testId = 'item-detail' }) => {
  const handleOnClose = () => {
    onClose();
  };

  return (
    <div onClick={handleOnClose} className="item-detail-container" data-testid={testId}>
      <aside className="item-detail-wrapper">
        <img src={item.image} alt={item.title} data-testid="image-item-detail" />
        <Item item={item} testId="item-details" />
      </aside>
    </div>
  );
};
