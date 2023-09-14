import React from 'react';
import './styles.css';

type Props = {
  onChange: (value: string) => void;
  onKeyDown: () => void;
  value: string;
  testId?: string;
};

export const Input: React.FC<Props> = ({ onChange, onKeyDown, value, testId = 'input' }) => {
  return (
    <input
      data-testid={testId}
      value={value}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onKeyDown();
        }
      }}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};
