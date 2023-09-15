import React from 'react';
import { ResultModel } from '../../../domain/models/result.model';
import { Item } from '../item';
import './styles.css';

type Props = {
  item: ResultModel;
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
        <img src={item.image} />
        <Item item={item} testId="item-details" />
      </aside>
    </div>
  );
};
