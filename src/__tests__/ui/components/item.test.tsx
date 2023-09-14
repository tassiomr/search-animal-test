import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultModel } from '@models/result.model';
import { Item } from '@ui/components';

// Sample ResultModel data for testing
const animal: ResultModel = {
  id: 1,
  title: 'Gepard',
  url: 'https://gepard.com',
  description: 'gepard description',
  image: 'gepard.jpg',
  type: 'lion',
};

describe('Item Component Testing', () => {
  it('should render the Item component with the provided testId', () => {
    render(<Item item={animal} testId="custom-item" />);

    const itemComponent = screen.getByTestId('custom-item');
    expect(itemComponent).toBeInTheDocument();
  });

  it('should render the title, url, and description from the item', () => {
    render(<Item item={animal} />);

    const titleComponent = screen.getByText(animal.title);
    const urlComponent = screen.getByText(animal.url);
    const descriptionComponent = screen.getByText(animal.description);

    expect(titleComponent).toBeInTheDocument();
    expect(urlComponent).toBeInTheDocument();
    expect(descriptionComponent).toBeInTheDocument();
  });
});
