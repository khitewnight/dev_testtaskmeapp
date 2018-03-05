/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { withStyles } from 'material-ui/styles';
import UploadWidget from './components/UploadWidget';
import TaskTable from './components/TaskTable';

const PROGRESS_NO_DATA = 1;
const PROGRESS_FETCHING = 2;
const PROGRESS_DATA_FETCHED = 3;
const PROGRESS_ERROR = 4;

const be_url_c9 = 'https://dev-testtaskmeapp-g30b00m-l3-d3str0y3r.c9users.io/schedules/upload';
const be_url_local = 'http://localhost:3001/schedules/upload';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  content: {
    display: 'block',
    width: '80%',
    overflow: 'hidden',
    paddingTop: '100px',
    textAlign: 'center',
    margin: '0px auto',
  },
  widgetContainer: {
    width: '30%',
    margin: '0px auto',
    padding: '0px auto',
  },
});

class App extends React.Component {
  state = {
    selectedFile: null,
    jobData: null,
    progress: PROGRESS_NO_DATA,
    resErr: null,
  };

  fileSelectHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    if (this.state.selectedFile != null) {
      this.setState({
        progress: PROGRESS_FETCHING,
      });
      const fd = new FormData();
      fd.append('schedule', this.state.selectedFile);
      axios.post(be_url_c9, fd)
        .then((res) => {
          // 200
          this.setState({
            progress: PROGRESS_DATA_FETCHED,
            jobData: res.data,
          });
        })
        .catch((err) => {
          // error
          this.setState({
            progress: PROGRESS_ERROR,
            resErr: `Error: ${err.response.data.error ? JSON.parse(err.response.data.error) : 'Unknown Error'}`,
          });
        });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.widgetContainer}>
            <UploadWidget
              fileSelectHandler={this.fileSelectHandler}
              fileUploadHandler={this.fileUploadHandler}
            />
            <TaskTable
              progress={this.state.progress}
              jobData={this.state.jobData}
              resErr={this.state.resErr}
            />
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
