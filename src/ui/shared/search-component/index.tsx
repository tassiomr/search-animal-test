import React from 'react';
import { Input } from '../../components/input';
import { MdSearch, MdClose } from 'react-icons/md';
import './styles.css';

type Props = {
  testId?: string;
};

export const SearchComponent: React.FC<Props> = ({ testId }) => {
  return (
    <div className="search-component-container" data-testid={testId}>
      <div className="input-container">
        <MdSearch size={25} className="icons-search-component" data-testid="search-icon" />
        <Input
          onChange={(value: string) => {
            fetch(value);
          }}
          onKeyDown={() => {}}
          value=""
          testId="input-search-component"
        />
        <MdClose size={25} className="icons-search-component" data-testid="clean-icon" onClick={() => {}} />
      </div>
    </div>
  );
};
