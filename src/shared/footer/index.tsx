import React from 'react';
import './styles.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <Paragraph text="ⓒ Google Inc" className="text-footer--margin-left" />
      <Paragraph text="version: 0.1.0" className="text-footer--margin-right" />
    </div>
  );
};

const Paragraph: React.FC<{ text: string; className?: string }> = ({ text }) => (
  <p className="text-footer--font-size text-footer--color">{text}</p>
);
