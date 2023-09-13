import React from 'react';
import { Container } from './styles';
import { Text } from '../../components/text';
import { textColors, typography } from '../../theme';

export const Footer = () => {
  return (
    <Container>
      <Text text="ⓒ Google Inc" styles={{ fontSize: typography.verySmallText, color: textColors.footer }} />
      <Text text="version: 0.1.0" styles={{ fontSize: typography.verySmallText, color: textColors.footer }} />
    </Container>
  );
};
