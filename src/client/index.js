import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import App from './App';
import {ParallaxProvider} from 'react-scroll-parallax';

//theming
const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#0085FF',
    },

    secondary: {
      main: '#FFC700',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>

    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById ('root')
);
