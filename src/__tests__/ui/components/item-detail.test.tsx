import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultModel } from '@domain/models/result.model';
import { ItemDetail } from '@ui/components';

// Sample ResultModel data for testing
const animalMock: ResultModel = {
  id: 10,
  title: 'Sample Item',
  image: 'sample-image.jpg',
  type: '',
  url: '',
  description: '',
};

describe('ItemDetail Component', () => {
  it('should render the ItemDetail component with the provided testId', () => {
    render(<ItemDetail item={animalMock} testId="custom-item-detail" />);

    const itemDetailComponent = screen.getByTestId('custom-item-detail');
    expect(itemDetailComponent).toBeInTheDocument();
  });

  it('should render the item image', () => {
    render(<ItemDetail item={animalMock} />);

    const itemImage = screen.getByRole('img');
    expect(itemImage).toBeInTheDocument();
    expect(itemImage).toHaveAttribute('src', animalMock.image);
  });

  it('should render the ResultItem component with the item name', () => {
    render(<ItemDetail item={animalMock} />);

    const resultItemComponent = screen.getByTestId('item-details');
    expect(resultItemComponent).toBeInTheDocument();
    expect(resultItemComponent.textContent).toBe(animalMock.title);
  });
});
