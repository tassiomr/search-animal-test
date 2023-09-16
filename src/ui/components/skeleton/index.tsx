import React from 'react';
import './styles.css';

export enum SkeletonSizes {
  small = 'skeleton-size-small',
  medium = 'skeleton-size-medium',
  large = 'skeleton-size-large',
}

type Props = {
  limit?: number;
  size?: SkeletonSizes;
  testId?: string;
};

const generateSkeletons = (limit: number, size: SkeletonSizes) => {
  return Array.from({ length: limit }, (_, index) => (
    <div key={index} data-testid={`testId-${index}`} className={`skeleton-nested skeleton-loading ${size}`}></div>
  ));
};

export const Skeleton: React.FC<Props> = ({ limit = 1, size = SkeletonSizes.small, testId = 'skeleton' }) => {
  if (limit > 1) {
    return <div data-testid="skeleton-build-container">{generateSkeletons(limit, size)}</div>;
  }

  return <div data-testid={testId} className={`skeleton-loading ${size}`}></div>;
};
