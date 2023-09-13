import React from 'react';
import { CenterWrapper, Container, AvatarIconContainer } from './styles';
import { SearchComponent } from '../../shared/search-component';
import { Footer } from '../../shared/footer';
import { Header } from '../../shared/header';
import { Text } from '../../components/text';
import { Avatar } from '../../components/avatar';
import { MdApps } from 'react-icons/md';
import { typography } from '../../theme';

export const HomePage = () => {
  return (
    <Container>
      <Header
        LeftComponent={<Text text="AgileContent FrontEnd Test" styles={{ fontSize: typography.smallText }} />}
        RightComponent={
          <AvatarIconContainer>
            <MdApps size={35} />
            <Avatar url={'https://i.scdn.co/image/ab6761610000e5eb4a61c7615c8125e832ffc32c'} />
          </AvatarIconContainer>
        }
      />
      <CenterWrapper>
        <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Imagem" />
        <SearchComponent />
      </CenterWrapper>
      <Footer />
    </Container>
  );
};
