import React from 'react';
import { Container, TextProps } from './styles';

type Props = {
  text: string;
  span?: string;
  styles: TextProps;
};

export const Text: React.FC<Props> = ({ text, styles }) => {
  return <Container styles={styles}>{text}</Container>;
};
