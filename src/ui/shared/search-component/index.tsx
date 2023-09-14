import { Input } from '@ui/components';
import React from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import './styles.css';

type Props = {
  onClose: () => void;
  onKeyDown: () => void;
  onChange: (name: string) => void;
  value: string;
  testId?: string;
};

const getComputedClass = (value: string) => {
  if (!value.length) {
    return 'icons-search-component--none';
  } else {
    return 'icons-search-component';
  }
};

export const SearchComponent: React.FC<Props> = ({ value, onChange, onClose, onKeyDown, testId }) => {
  return (
    <div className="search-component-container" data-testid={testId}>
      <div className="input-container">
        <MdSearch className="icons-search-component" data-testid="search-icon" />
        <Input onChange={onChange} onKeyDown={onKeyDown} value={value} testId="input-search-component" />
        <MdClose className={getComputedClass(value)} data-testid="clean-icon-button" onClick={onClose} />
      </div>
    </div>
  );
};
