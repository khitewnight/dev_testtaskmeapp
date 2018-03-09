import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

// my components

const styles = theme => ({
  root: {},
});

const AddJob = (props) => {
  const { classes } = props;
  return (
    <h1>ADD_JOB</h1>
  );
};

AddJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddJob);
