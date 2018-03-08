import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const JobControlsTabs = (props) => {
  const {
    classes, jobTabsHandleChange, jobTabsCurrent,
  } = props;
  return (
    <div className={classes.root}>
      <Tabs
        value={jobTabsCurrent}
        onChange={jobTabsHandleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="Completed" />
        <Tab label="In Progress" />
        <Tab label="Not Started" />
      </Tabs>
    </div>
  );
};

JobControlsTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  jobTabsHandleChange: PropTypes.func.isRequired,
  jobTabsCurrent: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(JobControlsTabs);
