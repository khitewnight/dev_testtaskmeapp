import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from './scenes/App/';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect to="/404" />
      </Switch>
      <Route
        exact
        path="/404"
        render={() => <h1>404</h1>}
      />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
