import styled from 'styled-components';

export type TextProps = {
  fontSize: number;
  fontWeight?: string;
  color?: string;
};

export const Container = styled.p<{ styles: TextProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ styles }) => styles.color || '#70757a'};
  font-size: ${({ styles }) => styles.fontSize || '12'}px;
`;
