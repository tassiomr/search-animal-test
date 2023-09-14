import React from 'react';
import { ResultModel } from '../../../domain/models/result.model';
import { Item } from '../item';
import './styles.css';

type Props = {
  item: ResultModel;
  testId?: string;
};

export const ItemDetail: React.FC<Props> = ({ item, testId = 'item-detail' }) => {
  return (
    <div className="item-detail-container" data-testid={testId}>
      <aside className="item-detail-wrapper">
        <img src={item.image} />
        <Item item={item} testId="item-details" />
      </aside>
    </div>
  );
};
