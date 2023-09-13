import React from 'react';
import { Container } from './styles';

export const Text: React.FC<{ text: string }> = ({ text }) => {
  return <Container>{text}</Container>;
};
