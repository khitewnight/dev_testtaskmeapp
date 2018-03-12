import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';

// my components
import FormMmws from './FormMmws';
import FormAdhoc from './FormAdhoc';
import jobAddFormRenderEnum from '../../../../helpers/jobAddFormRenderEnum';

const styles = theme => ({
  formArea: {
    // flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10px',
  },
});

const renderForm = (props) => {
  const {
    selectedForm,
    handleInputChange,
    tradeVal,
    componentVal,
    scopeVal,
    mmwsTab,
    mmwsTabsHandleChange,
  } = props;

  switch (selectedForm) {
    case 0: {
      return <FormAdhoc />;
    }
    case 1: {
      return (
        <FormMmws
          handleInputChange={handleInputChange}
          tradeVal={tradeVal}
          componentVal={componentVal}
          scopeVal={scopeVal}
          mmwsTab={mmwsTab}
          mmwsTabsHandleChange={mmwsTabsHandleChange}
        />);
    }
    default: {
      return 'Invalid';
    }
  }
};

const FormArea = (props) => {
  const {
    classes,
    selectedForm,
    handleInputChange,
    tradeVal,
    componentVal,
    scopeVal,
    mmwsTab,
    mmwsTabsHandleChange,
  } = props;

  return (
    <div className={classes.formArea}>
      {renderForm(props)}
    </div>
  );
};

FormArea.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedForm: PropTypes.oneOf(Object.values(jobAddFormRenderEnum)).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  tradeVal: PropTypes.string.isRequired,
  componentVal: PropTypes.string.isRequired,
  scopeVal: PropTypes.string.isRequired,
  mmwsTab: PropTypes.number.isRequired,
  mmwsTabsHandleChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormArea);
