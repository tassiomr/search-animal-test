import React from 'react';
import './styles.css';
import { MdClose, MdSearch } from 'react-icons/md';

type Props = {
  onChange: (value: string) => void;
  onKeyDown: () => void;
  value: string;
  testId?: string;
  onClose: () => void;
};

const getComputedClass = (value: string) => {
  if (!value.length) {
    return 'icons-input-component--none';
  } else {
    return 'icons-input-component';
  }
};

export const Input: React.FC<Props> = ({ onChange, onKeyDown, onClose, value, testId = 'input' }) => {
  return (
    <div className="input-container" data-testid={testId}>
      <div className="input-wrapper">
        <MdSearch className="icons-input-component" data-testid="search-icon" />
        <input
          data-testid={testId}
          value={value}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onKeyDown();
            }
          }}
          onChange={(event) => {
            event.preventDefault();
            onChange(event.target.value);
          }}
        />
        <MdClose className={getComputedClass(value)} data-testid="clean-icon-button" onClick={onClose} />
      </div>
    </div>
  );
};
