import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = theme => ({
  root: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '350px',
    alignSelf: 'center',
  },
});

const ManualAdd = (props) => {
  const {
    classes,
    handleInputChange,
    tradeVal,
    componentVal,
    scopeVal,
  } = props;

  return (
    <div className={classes.root}>
      <TextField
        id="tradeVal"
        label="Trade"
        className={classes.textField}
        value={props.tradeVal}
        onChange={props.handleInputChange('trade')}
        margin="normal"
      />
      <TextField
        id="componentVal"
        label="Component"
        className={classes.textField}
        value={props.componentVal}
        onChange={props.handleInputChange('component')}
        margin="normal"
      />
      <TextField
        id="scopeVal"
        label="Scope"
        className={classes.textField}
        value={props.scopeVal}
        onChange={props.handleInputChange('scope')}
        margin="normal"
      />
    </div>
  );
};

ManualAdd.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  tradeVal: PropTypes.string.isRequired,
  componentVal: PropTypes.string.isRequired,
  scopeVal: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(ManualAdd);
