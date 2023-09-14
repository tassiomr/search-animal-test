import React from 'react';
import './styles.css';
import { constants } from '@app/configs';

type Props = {
  term: string;
};
export const FeebackMessage: React.FC<Props> = ({ term }) => {
  return (
    <div className="result-container-message" data-testid="result-page-feedback">
      {term?.length ? (
        <Paragraph
          text={constants.resultPage.feedbackMessage.feedbackNotTerm.message}
          spanText={term}
          data-testid="result-page-feedback-p1"
        />
      ) : null}
      <Paragraph
        text={constants.resultPage.feedbackMessage.feedbackTryIt.message}
        spanText={constants.resultPage.feedbackMessage.feedbackTryIt.span}
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
