import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

// my components
import TabsArea from './TabsArea';
import ManualAdd from './ManualAdd';
import UploadSchedule from './UploadSchedule';

const styles = theme => ({
  formMmwsRoot: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
});

const renderForm = (props) => {
  const {
    handleInputChange,
    tradeVal,
    componentVal,
    scopeVal,
    mmwsTab,
  } = props;

  switch (mmwsTab) {
    case 0: {
      return (
        <ManualAdd
          handleInputChange={handleInputChange}
          tradeVal={tradeVal}
          componentVal={componentVal}
          scopeVal={scopeVal}
        />);
    }
    case 1: {
      return <UploadSchedule />;
    }
    default: {
      return 'Invalid';
    }
  }
};

const FormMmws = (props) => {
  const {
    classes,
    handleInputChange,
    tradeVal,
    componentVal,
    scopeVal,
    mmwsTab,
    mmwsTabsHandleChange,
  } = props;

  return (
    <div className={classes.formMmwsRoot}>
      <TabsArea
        mmwsTabsHandleChange={mmwsTabsHandleChange}
        mmwsTab={mmwsTab}
      />
      {renderForm(props)}
    </div>
  );
};

FormMmws.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  tradeVal: PropTypes.string.isRequired,
  componentVal: PropTypes.string.isRequired,
  scopeVal: PropTypes.string.isRequired,
  mmwsTab: PropTypes.number.isRequired,
  mmwsTabsHandleChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormMmws);
