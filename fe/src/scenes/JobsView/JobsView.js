import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

const JobsView = (props) => {
  const { classes } = props;
  return (
    <h1 style={{ textAlign: 'center' }}>JOBS VIEW</h1>
  );
};

JobsView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(JobsView);
