import React from 'react';
import './styles.css';
import { ResultItem } from '../result-item';
import { ResultModel } from '../../../models/result.model';

type Props = {
  item: ResultModel;
  testId: string;
};

export const ItemDetail: React.FC<Props> = ({ item, testId }) => {
  return (
    <div className="item-detail-container" data-testid={testId}>
      <aside className="item-detail-wrapper">
        <img src={item.image} />
        <ResultItem item={item} />
      </aside>
    </div>
  );
};
