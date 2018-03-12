import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: '35px',
  },
});

const UploadSchedule = (props) => {
  const {
    classes,
  } = props;

  return (
    <div className={classes.root}>
      <Typography
        color="primary"
        variant="title"
      >
        Upload Schedule
      </Typography>
    </div>
  );
};

UploadSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UploadSchedule);
