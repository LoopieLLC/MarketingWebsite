import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import App from './App';


// theming
const theme = createMuiTheme({
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

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
