import React from 'react';
import './styles.css';

export const Avatar: React.FC<{ url: string }> = ({ url }) => {
  return <img className="avatar" src={url} />;
};
