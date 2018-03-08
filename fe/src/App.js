import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// material-ui
import { withStyles } from 'material-ui/styles';

// my components and views
import TopAppBar from './components/TopAppBar';
import LeftNavDrawer from './components/LeftNavDrawer';
import MainView from './scenes/MainView/MainView';
import JobsView from './scenes/JobsView/JobsView';
import TasksView from './scenes/TasksView/TasksView';
import ResourcesView from './scenes/ResourcesView/ResourcesView';


const LEFT_NAV_DRAWER_WIDTH = '240px';

const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
  mainContainer: {
    marginLeft: LEFT_NAV_DRAWER_WIDTH,
    width: `calc(100% - ${LEFT_NAV_DRAWER_WIDTH})`,
    minHeight: '100vh',
    overflow: 'hidden',
  },
  contentContainer: {
    margin: '0 auto',
    width: '75%',
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  state = {
    isMobile: false,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <nav>
          <LeftNavDrawer
            drawerWidth={LEFT_NAV_DRAWER_WIDTH}
          />
        </nav>
        <header>
          <TopAppBar
            drawerWidth={LEFT_NAV_DRAWER_WIDTH}
          />
        </header>
        <main className={classes.mainContainer}>
          <div className={classes.toolbar} />
          <div className={classes.contentContainer}>
            <Switch>
              <Route
                exact
                path="/"
                component={MainView}
              />
              <Route
                path="/jobs"
                component={JobsView}
              />
              <Route
                path="/tasks"
                component={TasksView}
              />
              <Route
                path="/resources"
                component={ResourcesView}
              />
              <Route
                render={() => <h1>404</h1>}
              />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
