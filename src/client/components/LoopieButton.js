import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const LoopieButton = ({text, onClick, variant}) => {
  const styles = {
    boxShadow: "none",
  };

  return (
    <Button onClick={onClick} color='primary' size='medium' fullWidth={false} variant={variant} style={styles}>{text}</Button>
  );
};


LoopieButton.defaultProps = { color: 'blue', text: 'Eat my ass', variant: 'flat'}

LoopieButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default LoopieButton;
