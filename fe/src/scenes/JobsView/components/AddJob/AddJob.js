import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

// my components
import ControlsArea from './components/ControlsArea';
import SubmitArea from './components/SubmitArea';
import FormArea from './components/FormArea';
import jobAddFormRenderEnum from '../../helpers/jobAddFormRenderEnum';


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

let jobToAdd;

class AddJob extends React.Component {
  state = {
    selectedForm: jobAddFormRenderEnum.FORM_MMWS,
    mmwsTab: 0, // manual entry
    trade: '',
    component: '',
    scope: '',
    jobToAdd,
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

  handleSubmit = jobType => async (event) => {
    event.preventDefault();
    switch (jobType) {
      case jobAddFormRenderEnum.FORM_MMWS: {
        await this.setState({
          jobToAdd: {
            type: 'mmws',
            trade: this.state.trade,
            component: this.state.component,
            scope: this.state.scope,
          },
        });
        break;
      }
      case jobAddFormRenderEnum.FORM_ADHOC: {
        await this.setState({
          jobToAdd: {
            type: 'adhoc',
            trade: this.state.trade,
            component: this.state.component,
            scope: this.state.scope,
          },
        });
        break;
      }
      default:
    }
    console.log(`CONTENT: ${JSON.stringify(this.state.jobToAdd)}`);
  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <ControlsArea
          selectedForm={this.state.selectedForm}
          selectHandleChange={this.selectHandleChange}
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
  }
}


AddJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddJob);
