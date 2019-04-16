import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

//if you want to make a blue button set color = "primary" in buttonprops
function LoopieButton({text, onClick, variant, color, icon}) {
  const styles = {
    boxShadow: 'none',
    background: {color},
    borderRadius: '2px',
    padding: '8px 18px',
    fontWeight: 'bold',
  };

  return (
    <Button
      onClick={onClick}
      color={color}
      size="medium"
      fullWidth={false}
      variant={variant}
      style={styles}
    >
      {icon}
      {text}
    </Button>
  );
};

LoopieButton.defaultProps = {
  color: 'black',
  text: 'Eat my ass',
  variant: 'text',
};

LoopieButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default LoopieButton;
