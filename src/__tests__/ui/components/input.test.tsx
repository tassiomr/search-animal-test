import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '@ui/components';

describe('Input Component', () => {
  it('should render with a custom testId', () => {
    render(<Input testId="custom-input" onChange={() => {}} onKeyDown={() => {}} value="" />);

    const inputComponent = screen.getByTestId('custom-input');

    expect(inputComponent).toBeInTheDocument();
  });

  it('should call onChange callback when the input value changes', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} onKeyDown={() => {}} value="" />);

    const inputComponent = screen.getByTestId('input');

    fireEvent.change(inputComponent, { target: { value: 'example' } });

    expect(onChange).toHaveBeenCalledWith('example');
  });

  it('should call onKeyDown callback when the Enter key is pressed', () => {
    const onKeyDown = jest.fn();
    render(<Input onChange={() => {}} onKeyDown={onKeyDown} value="" />);

    const inputComponent = screen.getByTestId('input');

    fireEvent.keyDown(inputComponent, { key: 'Enter', code: 'Enter' });

    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should call onKeyDown callback when the  key pressed is not Enter', () => {
    const onKeyDown = jest.fn();
    render(<Input onChange={() => {}} onKeyDown={onKeyDown} value="" />);

    const inputComponent = screen.getByTestId('input');

    fireEvent.keyDown(inputComponent, { key: 'A', code: 'A' });

    expect(onKeyDown).not.toHaveBeenCalled();
  });
});
