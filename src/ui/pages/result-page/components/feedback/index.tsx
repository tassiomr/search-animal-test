import React from 'react';
import './styles.css';

export const FeebackMessage = () => {
  return (
    <div className="result-container-message" data-testid="result-page-feedback">
      <Paragraph text="Not results found for" spanText="xxx" data-testid="result-page-feedback-p1" />
      <Paragraph
        text="Try looking for:"
        spanText="insect, fish, horse, crocodilia, bear, cetacean, cow, lion,rabbit, cat, snake, dog, bird"
        data-testid="result-page-feedback-p2"
      />
    </div>
  );
};

const Paragraph: React.FC<{ text: string; spanText: string }> = ({ text, spanText }) => {
  return (
    <p className="text-feeback-message">
      {text}&nbsp;<span>{spanText}</span>
    </p>
  );
};
