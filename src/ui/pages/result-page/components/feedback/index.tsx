import React from 'react';
import './styles.css';
import { constants } from '@app/configs';

type Props = {
  errorMessage?: { message: string; span: string } | null;
  isVisible: boolean;
};
export const FeebackMessage: React.FC<Props> = ({ errorMessage, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="result-container-message default-body-style" data-testid="result-page-feedback">
      {errorMessage?.message ? (
        <Paragraph text={errorMessage.message} spanText={`'${errorMessage.span}'`} testId="result-page-feedback-p1" />
      ) : null}
      <Paragraph
        text={constants.resultPage.feedbackMessage.feedbackTryIt.message}
        spanText={constants.resultPage.feedbackMessage.feedbackTryIt.span}
        testId="result-page-feedback-p2"
      />
    </div>
  );
};

const Paragraph: React.FC<{ text: string; spanText: string; testId: string }> = ({ text, spanText, testId }) => {
  return (
    <p className="text-feeback-message" data-testid={testId}>
      {text}&nbsp;
      <span>{spanText}</span>
    </p>
  );
};
