import { css, Theme } from '@emotion/react';

const navbar = ({ colors, flex }: Theme) => css`
  ${flex.row}
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 14rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  background: ${colors.WHITE};
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
  font-size: 4rem;
  color: ${colors.GRAY_400};
  &:hover {
    color: ${colors.GRAY_800};
  }
`;

export { navbar, logo, menus, menu };
