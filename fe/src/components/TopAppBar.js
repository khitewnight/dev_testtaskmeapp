import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  appBar: {
    backgroundColor: '#2979FF',
  },
});

const TopAppBar = (props) => {
  const { classes, drawerWidth } = props;
  return (
    <AppBar
      className={classes.appBar}
      style={{
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth})`,
      }}
    >
      <Toolbar>
        <Typography variant="title" color="inherit">
          WeTrack Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerWidth: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopAppBar);
