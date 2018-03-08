import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  listItem: {
    width: '100%',
  },
  jobItemContainer: {
    width: '100%',
    padding: '15px',
    overflowX: 'auto',
  },
});

const JobItem = (props) => {
  const {
    classes, id, trade, component, scope,
  } = props;
  return (
    <ListItem className={classes.listItem}>
      <Paper className={classes.jobItemContainer}>
        <Typography><b>Id:</b> {id}</Typography>
        <Typography><b>Trade:</b> {trade}</Typography>
        <Typography><b>Component:</b> {component}</Typography>
        <Typography><b>Scope:</b> {scope}</Typography>
      </Paper>
    </ListItem>
  );
};

JobItem.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  trade: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  scope: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(JobItem);
