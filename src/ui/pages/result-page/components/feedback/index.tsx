import React from 'react';
import './styles.css';
import { constants } from '@app/configs';

type Props = {
  errorMessage?: { message: string; span: string } | null;
};
export const FeebackMessage: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div className="result-container-message" data-testid="result-page-feedback">
      {errorMessage ? (
        <Paragraph text={errorMessage.message} spanText={errorMessage.span} data-testid="result-page-feedback-p1" />
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
