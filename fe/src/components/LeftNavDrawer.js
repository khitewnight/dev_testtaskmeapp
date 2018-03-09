import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
// material-ui
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// material-ui icons
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import DeviceHubIcon from 'material-ui-icons/DeviceHub';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const ListItemLink = (props) => {
  const {
    icon, primary, to, location,
  } = props;

  return (
    <li style={(to === location.pathname) ? { backgroundColor: '#E0E0E0' } : {}}>
      <ListItem
        button
        component={Link}
        to={to}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

const LeftNavDrawer = (props) => {
  const { classes, drawerWidth, location } = props;
  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        <ListItemLink to="/" primary="View Jobs" icon={<DeviceHubIcon />} location={location} />
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      open
    >
      <div
        style={{
          width: drawerWidth,
        }}
      >
        {drawerContent}
      </div>
    </Drawer>
  );
};

LeftNavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerWidth: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withRouter(LeftNavDrawer));

