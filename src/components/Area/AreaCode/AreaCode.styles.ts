import { css, Theme } from '@emotion/react';

const container = ({ colors }: Theme) => css`
  padding: 2rem;
  margin-top: 2rem;
  border-bottom: 1px solid ${colors.GRAY_100};
  div {
    transition: all 0.3s;
  }
`;

const title = ({ colors }: Theme) => css`
  padding: 2rem;
  font-weight: 600;
  font-size: 3.5rem;
  color: ${colors.GRAY_700};
`;

const layout = css`
  display: flex;
  flex-wrap: wrap;
`;

const button = css`
  margin: 1rem;
`;

export { layout, button, container, title };
