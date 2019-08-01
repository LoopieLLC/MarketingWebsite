import React from 'react';
import Proptypes from 'prop-types';

const handleVariant = (variant) => {
  switch (variant) {
    case 'filled':
      return 'button fill';
    case 'outlined':
      return 'button outline';
    case 'text':
      return 'button text black';
    case 'textWhite':
      return 'button text white';
    default:
      return 'button text';
  }
};

const LoopieButton = (props) => {
  return (
    <button className={handleVariant(props.variant)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

LoopieButton.propTypes = {
  variant: Proptypes.string,
  onClick: Proptypes.func,
  children: Proptypes.children,
};

export default LoopieButton;
