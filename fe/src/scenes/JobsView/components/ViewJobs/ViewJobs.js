import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';

// my components
import JobItem from './components/JobItem';
import JobControls from './components/JobControls';

const styles = theme => ({
  root: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  jobList: {
    margin: '0 auto',
    width: '80%',
  },
  jobListContainer: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'overlay',
    },
    flex: '8',
  },
});

const ViewJobs = (props) => {
  const {
    classes, jobList, jobTabsCurrent, jobTabsHandleChange, match,
  } = props;

  return (
    <div className={classes.root}>
      <JobControls
        match={match}
        jobTabsCurrent={jobTabsCurrent}
        jobTabsHandleChange={jobTabsHandleChange}
      />
      <Paper square className={classes.jobListContainer}>
        <List className={classes.jobList}>
          {jobList.map(jobObject => (
            <JobItem key={jobObject.id} {...jobObject} />
          ))}
          {jobList.map(jobObject => (
            <JobItem key={jobObject.id} {...jobObject} />
          ))}
          {jobList.map(jobObject => (
            <JobItem key={jobObject.id} {...jobObject} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

ViewJobs.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  jobList: PropTypes.arrayOf(PropTypes.object).isRequired,
  jobTabsHandleChange: PropTypes.func.isRequired,
  jobTabsCurrent: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(ViewJobs);
