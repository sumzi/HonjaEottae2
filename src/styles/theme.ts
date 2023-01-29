import { css, Theme } from '@emotion/react';

const colors = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  PRIMARY: '#FF4264',
  SECONDARY: '#FF738C',
  GRAY_000: '#F4F4F4',
  GRAY_100: '#DEDEDE',
  GRAY_200: '#C8C8C8',
  GRAY_300: '#B1B1B1',
  GRAY_400: '#919191',
  GRAY_500: '#767676',
  GRAY_600: '#595959',
  GRAY_700: '#3F3F3F',
  GRAY_800: '#333333',
};

const flex = {
  row: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  column: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const sizes = {
  laptop: `@media screen and (min-width: 1024px)`,
  tablet: `@media screen and (max-width: 1024px)`,
  mobile: `@media screen and (max-width: 768px)`,
};

const theme: Theme = {
  colors,
  flex,
  sizes,
};
export default theme;
