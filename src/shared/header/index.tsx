import React from 'react';
import { Container } from './styles';

type Props = {
  LeftComponent: React.ReactElement;
  RightComponent: React.ReactElement;
};
export const Header: React.FC<Props> = ({ LeftComponent, RightComponent }) => {
  return (
    <Container>
      {LeftComponent}
      {RightComponent}
    </Container>
  );
};
