import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


//theming
const theme = createMuiTheme({
  palette: {

    primary: {
      main: '#0085FF',
    },

    secondary: {
      main: '#FFC700',
    }

    

  },

});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>,
  document.getElementById('root'));
