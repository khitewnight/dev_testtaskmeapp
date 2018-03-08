import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

const TasksView = (props) => {
  const { classes } = props;
  return (
    <h1>TASKS VIEW</h1>
  );
};

TasksView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TasksView);
