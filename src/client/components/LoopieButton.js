import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const LoopieButton = ({text, onClick, variant, color}) => {
  const styles = {
    boxShadow: 'none',
    background: {color},
    borderRadius: '2px',
    padding: '8px 18px',
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
