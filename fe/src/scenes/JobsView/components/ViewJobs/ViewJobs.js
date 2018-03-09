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
import JobControlsTabs from './components/JobControlsTabs';

const styles = (theme) => ({
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
  controlsContainer: {
    flex: '1',
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '2',
    position: 'relative',
  },
  controlsContainerRow1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  controlsTabs: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const ViewJobs = (props) => {
  const { classes, jobList, jobTabsCurrent, jobTabsHandleChange } = props;
  
  return (
    <div>
      <AppBar color="default" className={classes.controlsContainer}>
        <div className={classes.controlsContainerRow1}>
          <div className={classes.controlsFilter}>
            <Button
              color="primary"
            >
            Filter Options
            </Button>
          </div>
          <div className={classes.controlsAddJob}>
            <Button
              color="primary"
            >
            Add New Job
            </Button>
          </div>
        </div>
        <div className={classes.controlsTabs}>
          <JobControlsTabs
            jobTabsCurrent={jobTabsCurrent}
            jobTabsHandleChange={jobTabsHandleChange}
          />
        </div>
      </AppBar>
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
  classes: PropTypes.object.isRequired,
  jobList: PropTypes.arrayOf(PropTypes.object).isRequired,
  jobTabsHandleChange: PropTypes.func.isRequired,
  jobTabsCurrent: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(ViewJobs);