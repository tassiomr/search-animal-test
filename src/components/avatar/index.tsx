import React from 'react';
import { Container } from './styles';

export const Avatar: React.FC<{ url: string }> = ({ url }) => {
  return <Container src={url} />;
};
