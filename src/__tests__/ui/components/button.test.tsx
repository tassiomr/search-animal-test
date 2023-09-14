import { fireEvent, render } from '@testing-library/react';
import { Button } from '@ui/components';

describe('Button Component Tests', () => {
  it('should correctly render', () => {
    const { getByTestId } = render(<Button label="Buscar" onClick={jest.fn} isDisabled={false} />);

    const button = getByTestId('button') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
  });

  it('should call a function when not disabled', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button label="Buscar" onClick={onClick} isDisabled={false} />);

    const button = getByTestId('button') as HTMLButtonElement;

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call a function when disabled', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button label="Buscar" onClick={onClick} isDisabled={true} />);

    const button = getByTestId('button') as HTMLButtonElement;

    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
