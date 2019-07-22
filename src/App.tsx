import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { SnackbarProvider } from 'notistack';

import { routes } from './routes';

const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <SnackbarProvider>
          <HashRouter>
            {renderRoutes(routes)}
          </HashRouter>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
