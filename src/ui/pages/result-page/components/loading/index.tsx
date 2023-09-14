import React from 'react';
import './styles.css';
import { Skeleton, SkeletonSizes } from '../../../../components/skeleton';

type Props = {
  isVisible: boolean;
};

const generateSkeletons = (key: number) => (
  <div className="loading-container-item" key={key}>
    <Skeleton size={SkeletonSizes.small} />
    <Skeleton size={SkeletonSizes.medium} />
    <Skeleton size={SkeletonSizes.large} limit={3} />
  </div>
);

export const Loading: React.FC<Props> = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div className="loading-container" data-testid="result-page-loading">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index}>{generateSkeletons(index)}</div>
        ))}
      </div>
    );
  }
  return null;
};
