import { css, Theme } from '@emotion/react';

const header = ({ flex }: Theme) => css`
  ${flex.column}
  position:relative;
  padding: 10rem;
`;

const icon = ({ colors }: Theme) => css`
  cursor: pointer;
  position: absolute;
  margin: 1rem;
  left: 0;
  width: 8rem;
  height: 8rem;
  fill: ${colors.GRAY_100};
  transition: all 0.3s;
  &:hover {
    fill: ${colors.SECONDARY};
  }
`;

const title = css`
  font-size: 6.5rem;
  margin-bottom: 2rem;
`;

const address = ({ colors }: Theme) => css`
  font-size: 3rem;
  color: ${colors.GRAY_500};
`;

const layout = ({ sizes }: Theme) => css`
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  ${sizes.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const image = ({ sizes }: Theme) => css`
  width: 100%;
  height: 100%;
  max-height: 85rem;
  object-fit: cover;
  ${sizes.tablet} {
    height: 100%;
  }
`;

const overview = ({ colors }: Theme) => css`
  padding: 4rem 0;
  font-size: 4rem;
  color: ${colors.GRAY_800};
`;

export { header, icon, title, address, layout, image, overview };
