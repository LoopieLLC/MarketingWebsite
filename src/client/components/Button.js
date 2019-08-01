import React from 'react';
import Proptypes from 'prop-types';

function handleVariant(props) {
  const {variant} = props;
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
}

const Button = (props) => {
  return (
    <button className={handleVariant(props.variant)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  text: Proptypes.string,
  icon: Proptypes.any,
  variant: Proptypes.string,
  onClick: Proptypes.func,
  children: Proptypes.children,
};

export default Button;
