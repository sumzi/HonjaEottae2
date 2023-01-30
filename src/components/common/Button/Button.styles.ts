import { css, Theme } from '@emotion/react';

const size = {
  small: css`
    padding: 1rem 3rem;
    border-radius: 20px;
    font-size: 3.5rem;
  `,
  medium: css`
    padding: 3rem 5rem;
    font-size: 4rem;
  `,
  large: css`
    padding: 3rem 5rem;
    width: 100%;
    font-size: 4rem;
  `,
};

const variant = {
  primary: ({ colors }: Theme) => css`
    background: ${colors.PRIMARY};
    color: ${colors.WHITE};
    &:hover {
      background: ${colors.SECONDARY};
    }
  `,
  secondary: ({ colors }: Theme) => css`
    border: 1px solid ${colors.GRAY_500};
    &:hover {
      background: ${colors.GRAY_100};
    }
  `,
};

const button = css`
  background: inherit;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

export { button, size, variant };
