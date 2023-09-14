import React from 'react';
import './styles.css';
import { Skeleton, SkeletonSizes } from '../../../../components/skeleton';

const generateSkeletons = (key: number) => (
  <div className="loading-container" key={key}>
    <Skeleton size={SkeletonSizes.small} />
    <Skeleton size={SkeletonSizes.medium} />
    <Skeleton size={SkeletonSizes.large} limit={3} />
  </div>
);

export const Loading = () => (
  <>
    {Array.from({ length: 8 }, (_, index) => (
      <>{generateSkeletons(index)}</>
    ))}
  </>
);
