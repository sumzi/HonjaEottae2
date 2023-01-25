export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// export const decorators = [
//   story => {
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Story />
//     </ThemeProvider>;
//   },
// ];
