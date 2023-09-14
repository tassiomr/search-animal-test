import React from 'react';
import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <Paragraph text="ⓒ Google Inc" />
      <Paragraph text="version: 0.1.0" />
    </Container>
  );
};

const Paragraph: React.FC<{ text: string }> = ({ text }) => (
  <p className="text-default text-footer text-very-small">{text}</p>
);
