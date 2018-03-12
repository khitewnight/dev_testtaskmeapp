import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  formAdhocRoot: {
    flex: '1',
  },
});

const FormAdhoc = (props) => {
  const {
    classes,
  } = props;
  return (
    <div className={classes.formAdhocRoot}>
      formAdhocRoot
    </div>
  );
};

FormAdhoc.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormAdhoc);
