import { css, Theme } from '@emotion/react';

const navbar = ({ colors, flex }: Theme) => css`
  ${flex.row}
  justify-content: space-between;

  width: 100%;
  height: 14rem;
  background: ${colors.PRIMARY};
`;

const logo = ({ colors }: Theme) => css`
  margin: 0 5rem;
  color: ${colors.WHITE};
  font-size: 5rem;
  font-weight: 600;
`;

const menus = css`
  margin: 0 5rem;
  list-style-type: none;
`;

const menu = ({ colors }: Theme) => css`
  float: left;
  margin: 0 2rem;
  color: ${colors.WHITE};
  font-size: 3.5rem;
`;

export { navbar, logo, menus, menu };
