import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '@ui/shared';

describe('Header Component Testing', () => {
  it('should render the Header component correctly', () => {
    render(<Header>Children Content</Header>);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should render the children content', () => {
    render(<Header>Testing of children</Header>);

    const childrenContent = screen.getByText('Testing of children');
    expect(childrenContent).toBeInTheDocument();
  });
});
