import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// material-ui
import { withStyles } from 'material-ui/styles';

// helpers
import jobList from './helpers/jobList';

// my components and views
import TopAppBar from './components/TopAppBar';
import SubHeaderBar from './components/SubHeaderBar';
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
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  mainContainer: {
    marginLeft: LEFT_NAV_DRAWER_WIDTH,
    width: `calc(100% - ${LEFT_NAV_DRAWER_WIDTH})`,
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  state = {
    jobList,
    jobListFiltered: jobList,
    jobTabsCurrent: 0, // 'ALL' tab
  };

  jobTabsHandleChange = (event, value) => {
    const tempJobListFiltered = (value === 0)
      ? this.state.jobList.slice(0) :
      this.state.jobList.filter(x => x.status === value);
    this.setState({
      jobTabsCurrent: value,
      jobListFiltered: tempJobListFiltered,
    });
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
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/jobs" />
              )}
            />
            <Route
              path="/jobs"
              render={props => (
                <JobsView
                  jobList={this.state.jobListFiltered}
                  jobTabsCurrent={this.state.jobTabsCurrent}
                  jobTabsHandleChange={this.jobTabsHandleChange}
                  {...props}
                />
              )}
            />
            <Route
              render={() => <h1>404</h1>}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
