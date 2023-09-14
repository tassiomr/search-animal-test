import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@ui/shared';
import { constants } from '@app/configs';

describe('Footer', () => {
  it('renders the Footer component with the default testId', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  it('renders Paragraph components with the correct text', () => {
    render(<Footer />);

    const leftText = screen.getByText(constants.footer.enterprise);
    expect(leftText).toBeInTheDocument();

    const rightText = screen.getByText(constants.footer.version.replace('$s', '2'));
    expect(rightText).toBeInTheDocument();
  });
});
