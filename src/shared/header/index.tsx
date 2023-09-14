import React from 'react';
import { MdApps } from 'react-icons/md';
import { Avatar } from '../../components/avatar';
import './styles.css';

type Props = {
  children: React.ReactNode;
};
export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="header-container">
      {children}

      <div className="avatar-icon-container">
        <MdApps className="icon-google-apps" />
        <Avatar url={'https://i.scdn.co/image/ab6761610000e5eb4a61c7615c8125e832ffc32c'} />
      </div>
    </div>
  );
};
