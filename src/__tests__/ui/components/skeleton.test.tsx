import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton, SkeletonSizes } from '@ui/components';

describe('Skeleton Component', () => {
  it('should render the Skeleton component with the provided testId', () => {
    render(<Skeleton testId="custom-skeleton" />);

    const skeletonComponent = screen.getByTestId('custom-skeleton');
    expect(skeletonComponent).toBeInTheDocument();
  });

  it('should render a single small-sized skeleton by default', () => {
    render(<Skeleton />);

    const skeletonComponent = screen.getByTestId('skeleton');
    expect(skeletonComponent).toBeInTheDocument();
    expect(skeletonComponent).toHaveClass('skeleton-size-small');
  });

  it('should render multiple skeletons with the specified limit and size small', () => {
    const limit = 3;
    render(<Skeleton limit={limit} size={SkeletonSizes.small} />);
    const skeletonComponents = screen.getAllByTestId('skeleton');

    skeletonComponents.forEach((skeleton) => {
      const skeletonChildren = skeleton.querySelectorAll('.skeleton-size-small');
      expect(skeleton.children.length).toBe(limit);
      expect(skeletonChildren.length).toBe(limit);
    });
  });

  it('should render multiple skeletons with the specified limit and size medium', () => {
    const limit = 4;
    render(<Skeleton limit={limit} size={SkeletonSizes.medium} />);
    const skeletonComponents = screen.getAllByTestId('skeleton');

    skeletonComponents.forEach((skeleton) => {
      const skeletonChildren = skeleton.querySelectorAll('.skeleton-size-medium');
      expect(skeleton.children.length).toBe(limit);
      expect(skeletonChildren.length).toBe(limit);
    });
  });

  it('should render multiple skeletons with the specified limit and size large', () => {
    const limit = 5;
    render(<Skeleton limit={limit} size={SkeletonSizes.large} />);
    const skeletonComponents = screen.getAllByTestId('skeleton');

    skeletonComponents.forEach((skeleton) => {
      const skeletonChildren = skeleton.querySelectorAll('.skeleton-size-large');
      expect(skeleton.children.length).toBe(limit);
      expect(skeletonChildren.length).toBe(limit);
    });
  });
});
