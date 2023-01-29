import { css, Theme } from '@emotion/react';

const navbar = ({ colors, flex }: Theme) => css`
  ${flex.row}
  justify-content: space-between;

  width: 100%;
  height: 14rem;
  border-bottom: 1px solid ${colors.GRAY_100};
  padding: 0 20rem;
`;

const logo = ({ colors }: Theme) => css`
  color: ${colors.PRIMARY};
  font-size: 5rem;
  font-weight: 600;
`;

const menus = css`
  list-style-type: none;
`;

const menu = ({ colors }: Theme) => css`
  float: left;
  margin: 0 5rem;
  font-size: 3.6rem;
  color: ${colors.GRAY_400};
  &:hover {
    color: ${colors.GRAY_800};
  }
`;

export { navbar, logo, menus, menu };
