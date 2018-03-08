import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

const ResourcesView = (props) => {
  const { classes } = props;
  return (
    <h1>RESOURCES VIEW</h1>
  );
};

ResourcesView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResourcesView);
