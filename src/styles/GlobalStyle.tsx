import { css, Global, Theme } from '@emotion/react';

const global = ({ colors, sizes }: Theme) => css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 4px;

    ${sizes?.mobile} {
      font-size: 3.5px;
    }
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function GlobalStyle() {
  return <Global styles={global} />;
}

export default GlobalStyle;
