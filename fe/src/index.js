import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
