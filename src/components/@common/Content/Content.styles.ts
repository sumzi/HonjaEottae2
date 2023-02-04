import { css, Theme } from '@emotion/react';

const wrapper = ({ colors }: Theme) => css`
  padding: 8rem 0;
  border-top: 1px solid ${colors.GRAY_100};
  font-size: 4rem;
  line-height: 180%;
  & > label {
    display: inline-block;
    padding-bottom: 4rem;
    font-size: 5.5rem;
    font-weight: 600;
  }
`;

export { wrapper };
