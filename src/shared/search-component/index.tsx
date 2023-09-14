import React from 'react';
import { Input } from '../../components/input';
import { MdSearch, MdClose } from 'react-icons/md';
import './styles.css';

export const SearchComponent = () => {
  return (
    <div className="search-component-container">
      <div className="input-container">
        <MdSearch size={25} className="icons-search-component" />
        <Input />
        <MdClose size={25} className="icons-search-component" />
      </div>
    </div>
  );
};
