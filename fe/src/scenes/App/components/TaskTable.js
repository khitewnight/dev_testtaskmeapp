/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 2,
  },
  taskItemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  taskItem: {
    flexBasis: '25%',
    marginTop: '10px',
  },
});

const display = (classes, progress, jobData, resErr) => {
  switch (progress) {
    case 1:
      return (
        <Typography
          variant="title"
          color="textSecondary"
        >
        Nothing to display
        </Typography>
      );
    case 2:
      return (
        <Typography
          variant="title"
        >
        Loading...
        </Typography>
      );
    case 3: {
      // trade, jobTitle, taskList[]
      const tasks = JSON.parse(jobData).map((x, i) => (
        <div className={classes.taskItem}>
          <Typography variant="title">{i + 1}. {x.trade}</Typography>
          <Typography
            variant="subheading"
            paragraph
          >
            {x.jobTitle}
          </Typography>
          {x.taskList.map(y =>
        (
          <Typography
            algin="center"
            variant="body1"
            paragraph
          >
            {y}
          </Typography>
        ))}
        </div>
      ));
      return (
        <div className={classes.taskItemsContainer}>
          {tasks}
        </div>
      );
    }
    case 4:
      // error
      return (
        <Typography
          variant="title"
          color="error"
        >
          {resErr}
        </Typography>
      );
    default:
      return <div />;
  }
};

const TaskTable = ({
  classes, progress, jobData, resErr,
}) => (
  <div className={classes.container}>
    {display(classes, progress, jobData, resErr)}
  </div>
);

TaskTable.propTypes = {
  classes: PropTypes.object.isRequired,
  jobData: PropTypes.object.isRequired,
  resErr: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(TaskTable);
