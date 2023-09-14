import React from 'react';
import './styles.css';

type Props = {
  url: string;
  testId?: string;
};

export const Avatar: React.FC<Props> = ({ url, testId }) => {
  return <img className="avatar" src={url} data-testid={testId} />;
};
