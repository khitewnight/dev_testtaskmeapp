import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    padding: '5px',
    backgroundColor: '#90CAF9',
    color: 'white',
  },
});

const SubHeaderBar = (props) => {
  const { classes, drawerWidth } = props;
  return (
    <div className={classes.root}>
      <Typography variant="title" color="inherit">
          WeTrack Dashboard
      </Typography>
    </div>
  );
};

SubHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerWidth: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(SubHeaderBar);
