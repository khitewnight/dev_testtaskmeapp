import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Typography from 'material-ui/Typography';

// my components
import jobAddFormRenderEnum from '../../../helpers/jobAddFormRenderEnum';

const styles = theme => ({
  controlsArea: {
    minHeight: '125px',
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  controlsRow1: {
    marginTop: '-5px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  controlsRow2: {
    marginBottom: '15px',
  },
  FormControl: {
    marginTop: '5px',
  },
});

const IconButtonLink = (props) => {
  const {
    color, to, icon, classes,
  } = props;
  return (
    <IconButton
      component={Link}
      color={color}
      to={to}
    >
      {icon}
    </IconButton>
  );
};

IconButtonLink.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

const ControlsRow1 = (props) => {
  const {
    classes,
    selectedForm,
    selectHandleChange,
    jobAddStage,
    returnToStage1,
    confirmJobListAddOnClick,
  } = props;

  switch (jobAddStage) {
    case 0:
      return (
        <div className={classes.controlsRow1}>
          <IconButtonLink
            classes={classes}
            color="primary"
            to="/jobs"
            icon={<ArrowBackIcon />}
          />
          <FormControl className={classes.FormControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={selectedForm}
              onChange={selectHandleChange}
              name="selectedForm"
            >
              <MenuItem value={0}>Adhoc</MenuItem>
              <MenuItem value={1}>MMWS</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    case 1:
      return (
        <div className={classes.controlsRow1}>
          <IconButton
            color="primary"
            onClick={returnToStage1}
          >
            {<ArrowBackIcon />}
          </IconButton>
          <Button
            color="primary"
            onClick={confirmJobListAddOnClick}
          >
            Confirm Add
          </Button>
        </div>
      );
    default:
      return 'invalid';
  }
};

ControlsRow1.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedForm: PropTypes.oneOf(Object.values(jobAddFormRenderEnum)).isRequired,
  selectHandleChange: PropTypes.func.isRequired,
  jobAddStage: PropTypes.number.isRequired,
  returnToStage1: PropTypes.func.isRequired,
  confirmJobListAddOnClick: PropTypes.func,
};

const controlRows2Text = (jobAddStage) => {
  switch (jobAddStage) {
    case 0:
      return 'Add New Job';
    case 1:
      return 'Confirm Job Add';
    default:
      return 'invalid';
  }
};

const ControlsRow2 = (props) => {
  const { classes, jobAddStage } = props;
  return (
    <div className={classes.controlsRow2}>
      <Typography
        color="primary"
        align="center"
        variant="title"
      >
        {controlRows2Text(jobAddStage)}
      </Typography>
    </div>
  );
};

ControlsRow2.propTypes = {
  classes: PropTypes.object.isRequired,
  jobAddStage: PropTypes.number.isRequired,
};

const ControlsArea = (props) => {
  const {
    classes,
    selectedForm,
    selectHandleChange,
    jobAddStage,
    returnToStage1,
    confirmJobListAddOnClick,
  } = props;
  return (
    <AppBar color="default" className={classes.controlsArea}>
      <ControlsRow1
        returnToStage1={returnToStage1}
        jobAddStage={jobAddStage}
        classes={classes}
        selectedForm={selectedForm}
        selectHandleChange={selectHandleChange}
        confirmJobListAddOnClick={confirmJobListAddOnClick}
      />
      <ControlsRow2 classes={classes} jobAddStage={jobAddStage} />
    </AppBar>
  );
};

ControlsArea.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedForm: PropTypes.oneOf(Object.values(jobAddFormRenderEnum)).isRequired,
  selectHandleChange: PropTypes.func.isRequired,
  jobAddStage: PropTypes.number.isRequired,
  returnToStage1: PropTypes.func.isRequired,
  confirmJobListAddOnClick: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(ControlsArea);
