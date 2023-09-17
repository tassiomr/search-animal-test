import React from 'react';
import './styles.css';
import { constants } from '@app/configs';

type Props = {
  testId?: string;
};

export const Footer: React.FC<Props> = ({ testId = 'footer' }) => {
  return (
    <div className="footer-container" data-testid={testId}>
      <Paragraph text={constants.footer.enterprise} />
      <Paragraph text={constants.footer.version} />
    </div>
  );
};

const Paragraph: React.FC<{ text: string; className?: string }> = ({ text }) => <p className="text-footer">{text}</p>;
