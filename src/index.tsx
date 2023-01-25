import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

const rootNode = document.getElementById('root') as Element;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
