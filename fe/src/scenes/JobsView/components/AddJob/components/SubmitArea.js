import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  submitArea: {
    // flex: '1',
    textAlign: 'center',
    marginTop: '25px',
  },
});

const SubmitArea = (props) => {
  const {
    classes,
  } = props;
  return (
    <div className={classes.submitArea}>
      <Button
        variant="raised"
        color="inherit"
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
};

SubmitArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SubmitArea);
