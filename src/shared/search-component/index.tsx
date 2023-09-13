import React from 'react';
import { Container, InputContainer } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { MdSearch, MdClose } from 'react-icons/md';

export const SearchComponent = () => {
  return (
    <Container>
      <InputContainer>
        <MdSearch size={25} />
        <Input />
        <MdClose size={25} />
      </InputContainer>
      <Button />
    </Container>
  );
};
