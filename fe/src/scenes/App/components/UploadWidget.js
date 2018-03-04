/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import Button from 'material-ui/Button';
import FileUpload from 'material-ui-icons/FileUpload';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
    width: '100%',
    fontSize: '125%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  container: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'left',
  },
});

const UploadWidget = ({
  classes, fileSelectHandler, fileUploadHandler,
}) => (
  <div className={classes.container}>
    <input
      style={{
          color: 'grey',
        }}
      type="file"
      onChange={fileSelectHandler}
    />
    <Button
      color="primary"
      variant="raised"
      className={classes.button}
      onClick={fileUploadHandler}
    >
          Upload
      <FileUpload className={classes.rightIcon} />
    </Button>
  </div>
);

UploadWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  fileSelectHandler: PropTypes.func.isRequired,
  fileUploadHandler: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(UploadWidget);
