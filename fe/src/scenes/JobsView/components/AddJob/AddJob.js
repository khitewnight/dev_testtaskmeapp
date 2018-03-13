import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import Typography from 'material-ui/Typography';

// my components
import ControlsArea from './components/ControlsArea';
import SubmitArea from './components/SubmitArea';
import FormArea from './components/FormArea';
import jobAddFormRenderEnum from '../../helpers/jobAddFormRenderEnum';
import FormStage2 from './components/FormStage2';

const styles = theme => ({
  root: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
});

let jobsToAdd;

class AddJob extends React.Component {
  state = {
    selectedForm: jobAddFormRenderEnum.FORM_MMWS,
    mmwsTab: 0, // manual entry
    trade: '',
    component: '',
    scope: '',
    alertFieldsUnfilledOpen: false,
    jobsToAdd: [],
    addJobStage: 0,
  };

  mmwsTabsHandleChange = (event, value) => {
    this.setState({
      mmwsTab: value,
    });
  };

  selectHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  returnToStage1 = () => {
    this.setState({
      jobsToAdd: [],
      addJobStage: 0,
    });
  };

  handleSubmit = jobType => async (event) => {
    event.preventDefault();
    switch (jobType) {
      case jobAddFormRenderEnum.FORM_MMWS: {
        switch (this.state.mmwsTab) {
          case 0:
            if (!this.state.trade || !this.state.component || !this.state.scope) {
              this.setState({ alertFieldsUnfilledOpen: true });
              break;
            }
            await this.setState(prevState => ({
              jobsToAdd: [
                ...prevState.jobsToAdd,
                {
                  type: 'mmws',
                  trade: this.state.trade,
                  component: this.state.component,
                  scope: this.state.scope,
                },
              ],
              addJobStage: 1,
            }));
            break;
          case 1:
            // check if file uploaded
            break;
          default:
        }
        break;
      }
      case jobAddFormRenderEnum.FORM_ADHOC: {
        if (!this.state.trade || !this.state.component || !this.state.scope) {
          break;
        }
        await this.setState(prevState => ({
          jobsToAdd: [
            ...prevState.jobsToAdd,
            {
              type: 'adhoc',
              trade: this.state.trade,
              component: this.state.component,
              scope: this.state.scope,
            },
          ],
        }));
        break;
      }
      default:
    }
  };

  render() {
    const {
      classes,
    } = this.props;

    const addJobStage1 = () => (
      <div className={classes.root}>
        <ControlsArea
          returnToStage1={this.returnToStage1}
          selectedForm={this.state.selectedForm}
          selectHandleChange={this.selectHandleChange}
          jobAddStage={0}
        />
        <Paper
          square
          className={classes.formContainer}
        >
          <form onSubmit={this.handleSubmit(this.state.selectedForm)}>
            <FormArea
              selectedForm={this.state.selectedForm}
              handleInputChange={this.handleInputChange}
              tradeVal={this.state.trade}
              componentVal={this.state.component}
              scopeVal={this.state.scope}
              mmwsTab={this.state.mmwsTab}
              mmwsTabsHandleChange={this.mmwsTabsHandleChange}
            />
            <SubmitArea />
          </form>
        </Paper>
      </div>
    );

    const addJobStage2 = () => (
      <div className={classes.root}>
        <ControlsArea
          returnToStage1={this.returnToStage1}
          selectedForm={this.state.selectedForm}
          selectHandleChange={this.selectHandleChange}
          jobAddStage={1}
        />
        <FormStage2
          jobsToAdd={this.state.jobsToAdd}
        />

      </div>
    );

    const renderAddJobStage = (addJobStage) => {
      switch (addJobStage) {
        case 0:
          return addJobStage1();
        case 1:
          return addJobStage2();
        default:
          return 'invalid';
      }
    };

    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.alertFieldsUnfilledOpen}
          onClose={() => this.setState({ alertFieldsUnfilledOpen: false })}
          message={<Typography variant="subheading" color="error">All input fields must be filled!</Typography>}
        />
        {renderAddJobStage(this.state.addJobStage)}
      </div>
    );
  }
}


AddJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddJob);
