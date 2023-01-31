import { css, Theme } from '@emotion/react';

const input = ({ colors, sizes }: Theme) => css`
  margin-right: 2rem;
  padding: 3rem 5rem;
  width: 100rem;
  outline: none;
  border: 1px solid ${colors.GRAY_100};
  border-radius: 5px;
  font-size: 4rem;

  ${sizes.mobile} {
    width: 70%;
  }

  &:focus {
    border: 1px solid ${colors.PRIMARY};
  }
`;

const wrapper = css`
  padding: 4rem 0;
  text-align: center;
`;

export { wrapper, input };
