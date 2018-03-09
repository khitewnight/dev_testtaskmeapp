import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

// my components
import ViewJobs from './components/ViewJobs/ViewJobs';
import AddJob from './components/ViewJobs/AddJob';
import jobViewEnum from './helpers/jobViewEnum';

const styles = theme => ({
  root: {
    flex: '1',
    width: '80%',
    [theme.breakpoints.up('lg')]: {
      width: '900px',
    },
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
});

const JobsView = (props) => {
  const {
    classes, /*jobViewCurrent,*/ match
  } = props;
  
  return (
    <Paper className={classes.root}>
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => ViewJobs}
        />
        <Route
          exact
          path={`${match.url}/add`}
          render={() => AddJob}
        />
      </Switch>
    </Paper>
  );
};

JobsView.propTypes = {
  classes: PropTypes.object.isRequired,
  jobViewCurrent: PropTypes.oneOf(jobViewEnum).isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(JobsView);
