import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';

// my components
import JobItem from '../../../../components/ViewJobs/components/JobItem';

const styles = theme => ({
  stage2Root: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'overlay',
    },
    flex: '1',
  },
  jobList: {
    margin: '0 auto',
    width: '80%',
  },
});

const FormMmws = (props) => {
  const {
    classes,
    jobsToAdd,
  } = props;

  return (
    <Paper square className={classes.stage2Root}>
      <List className={classes.jobList}>
        {jobsToAdd.map(jobObject => (
          <JobItem key={jobObject.id} {...jobObject} />
        ))}
      </List>
    </Paper>
  );
};

FormMmws.propTypes = {
  classes: PropTypes.object.isRequired,
  jobsToAdd: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(FormMmws);
