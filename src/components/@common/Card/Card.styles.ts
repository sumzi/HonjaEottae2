import { css, Theme } from '@emotion/react';

const card = ({ colors }: Theme) => css`
  height: 58rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid ${colors.GRAY_100};
  transition: 0.3s;
  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  }
`;

const image = ({ colors }: Theme) => css`
  width: 100%;
  height: 43rem;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${colors.GRAY_100};
`;

const content = ({ flex, colors }: Theme) => css`
  ${flex.column}

  padding:2rem;
  height: 14rem;
  font-size: 4rem;
  color: ${colors.GRAY_800};
`;
export { card, image, content };
