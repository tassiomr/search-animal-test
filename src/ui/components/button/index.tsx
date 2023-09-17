import React from 'react';
import './styles.css';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
  testId?: string;
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  isDisabled,
  testId = 'button',
}) => {
  return (
    <button
      aria-label={label}
      data-testid={testId}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
