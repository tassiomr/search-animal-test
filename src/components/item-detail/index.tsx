import React from 'react';
import './styles.css';
import { ResultItem } from '../result-item';

export const ItemDetail = () => {
  return (
    <div className="item-detail-container">
      <aside className="item-detail-wrapper">
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1024px-Eopsaltria_australis_-_Mogo_Campground.jpg'
          }
        />
        <ResultItem />
      </aside>
    </div>
  );
};
