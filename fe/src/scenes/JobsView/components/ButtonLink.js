import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import Button from 'material-ui/Button';

const ButtonLink = (props) => {
  const {
    color, to, text,
  } = props;
  return (
    <Button
      component={Link}
      color={color}
      to={to}
    >
      {text}
    </Button>
  );
};

ButtonLink.propTypes = {
  color: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
