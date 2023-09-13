import React from 'react';
import { Container } from './styles';
import { Text } from '../../components/text';

export const Footer = () => {
  return (
    <Container>
      <Text text="ⓒ Google Inc" />
      <Text text="version: 0.1.0" />
    </Container>
  );
};
