import { css, Theme } from '@emotion/react';

const wrapper = ({ sizes }: Theme) => css`
  display: flex;
  padding: 6rem 0;
  position: relative;
  ${sizes.mobile} {
    flex-direction: column;
  }
`;

const line = ({ sizes, colors }: Theme) => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30rem;
  z-index: -1;
  border: 3px solid ${colors.GRAY_000};
  ${sizes.mobile} {
    left: 50%;
  }
`;

const image = ({ sizes, colors }: Theme) => css`
  display: flex;
  justify-content: center;
  margin-right: 15rem;
  img {
    width: 60rem;
    height: 60rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid ${colors.GRAY_100};
  }
  ${sizes.mobile} {
    margin-right: 0;
    margin-bottom: 8rem;
  }
`;

const content = ({ colors }: Theme) => css`
  display: inline-block;
  flex: 1;
  padding: 8rem;
  background: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_100};
  border-radius: 20px;
`;
const layout = ({ flex }: Theme) => css`
  ${flex.row}
  justify-content: left;
  margin-bottom: 4rem;
`;

const index = ({ colors }: Theme) => css`
  display: inline-block;
  margin-right: 2rem;
  width: 7rem;
  height: 7rem;
  border-radius: 7rem;
  background: ${colors.PRIMARY};
  color: ${colors.WHITE};
  text-align: center;
  font-weight: 600;
`;

const name = css`
  font-weight: 600;
  font-size: 5rem;
`;

const overview = ({ colors }: Theme) => css`
  color: ${colors.GRAY_800};
`;

export { wrapper, line, image, layout, index, name, content, overview };
