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
};

const generateSkeletons = (limit: number, size: SkeletonSizes) => {
  return Array.from({ length: limit }, (_, index) => (
    <div key={index} className={`skeleton-nested skeleton-loading ${size}`}></div>
  ));
};

export const Skeleton: React.FC<Props> = ({ limit = 1, size = SkeletonSizes.small }) => {
  if (limit > 1) {
    return <div>{generateSkeletons(limit, size)}</div>;
  }

  return <div className={`skeleton-loading ${size}`}></div>;
};
