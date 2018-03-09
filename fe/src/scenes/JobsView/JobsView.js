import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

// my components
import ViewJobs from './components/ViewJobs/ViewJobs';
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

const renderJobView = (jobViewCurrent) => {
  switch(jobViewCurrent) {
    case jobViewEnum.VIEW_JOBS: {
      return ViewJobs;
    }
    case jobViewEnum.ADD_JOB: {
      return (<h1>ADD_JOB</h1>);
    }
    case jobViewEnum.EDIT_JOB: {
      return (<h1>EDIT_JOB</h1>);
    }
  }
};

const JobsView = (props) => {
  const {
    classes, jobViewCurrent
  } = props;
  
  return (
    <Paper className={classes.root}>
      {renderJobView(jobViewCurrent)}
    </Paper>
  );
};

JobsView.propTypes = {
  classes: PropTypes.object.isRequired,
  jobViewCurrent: PropTypes.oneOf(jobViewEnum).isRequired,
};

export default withStyles(styles, { withTheme: true })(JobsView);
