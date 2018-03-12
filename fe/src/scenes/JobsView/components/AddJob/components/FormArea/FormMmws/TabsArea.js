import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  tabsRoot: {
  },
});

const TabsArea = (props) => {
  const {
    classes,
    mmwsTabsHandleChange,
    mmwsTab,
  } = props;

  return (
    <div className={classes.tabsRoot}>
      <Tabs
        value={mmwsTab}
        onChange={mmwsTabsHandleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Manual Add" />
        <Tab label="From Schedule" />
      </Tabs>
    </div>
  );
};

TabsArea.propTypes = {
  classes: PropTypes.object.isRequired,
  mmwsTabsHandleChange: PropTypes.func.isRequired,
  mmwsTab: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(TabsArea);
