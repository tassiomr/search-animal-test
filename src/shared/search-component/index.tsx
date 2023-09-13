import React from 'react';
import { Container, InputContainer } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

export const SearchComponent = () => {
  return (
    <Container>
      <InputContainer>
        <Input />
      </InputContainer>
      <Button />
    </Container>
  );
};
