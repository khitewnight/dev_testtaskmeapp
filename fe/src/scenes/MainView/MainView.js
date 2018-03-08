import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {},
});

const MainView = (props) => {
  const { classes } = props;
  let x = 'rawr';
  for (let i = 0; i < 10000; i += 1) {
    x += 'rawr ';
  }
  return (
    <div className={classes.root}>
      <Typography
        align="center"
        color="primary"
        variant="title"
      >
      MAIN VIEW
      </Typography>
      <h1 style={{ textAlign: 'center' }}>MAIN VIEW</h1>
      {x}
    </div>
  );
};

MainView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainView);
