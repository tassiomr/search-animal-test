import React from 'react';
import { Container, AvatarIconContainer } from './styles';
import { MdApps } from 'react-icons/md';
import { Avatar } from '../../components/avatar';

type Props = {
  children: React.ReactNode;
};
export const Header: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}

      <AvatarIconContainer>
        <MdApps size={35} />
        <Avatar url={'https://i.scdn.co/image/ab6761610000e5eb4a61c7615c8125e832ffc32c'} />
      </AvatarIconContainer>
    </Container>
  );
};
