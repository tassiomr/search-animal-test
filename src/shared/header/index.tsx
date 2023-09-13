export {};
import React from 'react';
import { Container, AvatarIconContainer } from './styles';
import { Text } from '../../components/text';
import { Avatar } from '../../components/avatar';
import { MdApps } from 'react-icons/md';

export const Header = () => {
  return (
    <Container>
      <Text text="AgileContent FrontEnd Test" />
      <AvatarIconContainer>
        <MdApps size={35} />
        <Avatar url={'https://i.scdn.co/image/ab6761610000e5eb4a61c7615c8125e832ffc32c'} />
      </AvatarIconContainer>
    </Container>
  );
};
