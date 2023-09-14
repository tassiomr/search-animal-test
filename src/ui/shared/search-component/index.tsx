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

export const SearchComponent: React.FC<Props> = ({ value, onChange, onClose, onKeyDown, testId }) => {
  return (
    <div className="search-component-container" data-testid={testId}>
      <div className="input-container">
        <MdSearch size={25} className="icons-search-component" data-testid="search-icon" />
        <Input onChange={onChange} onKeyDown={onKeyDown} value={value} testId="input-search-component" />
        <MdClose size={25} className="icons-search-component" data-testid="clean-icon" onClick={onClose} />
      </div>
    </div>
  );
};
