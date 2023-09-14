import React from 'react';
import './styles.css';
import { ResultItem } from '../../../../components/result-item';

export const ResultList = () => {
  return (
    <div className="result-list-container">
      {Array.from({ length: 100 }, (_, index) => {
        return <ResultItem />;
      })}
    </div>
  );
};
