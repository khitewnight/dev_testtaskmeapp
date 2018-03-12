import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

// my components
import JobControlsTabs from './JobControlsTabs';
import ButtonLink from '../../ButtonLink';

const styles = theme => ({
  controlsContainer: {
    minHeight: '125px',
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
});

const JobControlsRow1 = (props) => {
  const { classes, match } = props;
  return (
    <div className={classes.controlsContainerRow1}>
      <Button
        color="primary"
      >
      Filter Options
      </Button>
      <ButtonLink
        color="primary"
        to={`${match.url}/add`}
        text="Add New Job"
      />
    </div>
  );
};

JobControlsRow1.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const JobControls = (props) => {
  const {
    classes, jobTabsHandleChange, jobTabsCurrent, match,
  } = props;
  return (
    <AppBar color="default" className={classes.controlsContainer}>
      <JobControlsRow1
        classes={classes}
        match={match}
      />
      <JobControlsTabs
        jobTabsCurrent={jobTabsCurrent}
        jobTabsHandleChange={jobTabsHandleChange}
      />
    </AppBar>
  );
};

JobControls.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  jobTabsHandleChange: PropTypes.func.isRequired,
  jobTabsCurrent: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(JobControls);
