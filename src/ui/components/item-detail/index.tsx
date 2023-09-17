import React, { useEffect, useState } from 'react';
import { Item } from '../item';
import './styles.css';
import { Animal } from '@app/models/animal.model';

type Props = {
  item: Animal;
  testId?: string;
  onClose: () => void;
};

const getComputatedClass = (loading: boolean) => {
  if (loading) return 'image-hidden';
  return '';
};

export const ItemDetail: React.FC<Props> = ({ item, onClose, testId = 'item-detail' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onload = () => setIsLoading(false);

  useEffect(() => {
    setIsLoading(true);
  }, [item?.image]);

  if (!item) return null;

  const handleOnClose = () => {
    onClose();
  };

  return (
    <div onClick={handleOnClose} className="item-detail-container" data-testid={testId}>
      <div className="item-detail-wrapper">
        {isLoading ? <div className="spinner" /> : null}
        <img
          className={getComputatedClass(isLoading)}
          src={item.image}
          alt={item.title}
          data-testid="image-item-detail"
          onLoad={onload}
        />
        <Item item={item} testId="item-details" />
      </div>
    </div>
  );
};
