import React from 'react';

function handleVariant(props) {
  const {variant} = props;
  switch (variant) {
    case 'filled':
      return 'button fill';
    case 'outlined':
      return 'button outline';
    case 'text':
      return 'button text black';
    default:
      return 'button text';
  }
}

function LoopieButton({text, onClick, variant, icon}) {
  return (
    <button className={handleVariant({variant})}>
      {icon}
      {text}
    </button>
  );
}

LoopieButton.proptypes = {
  text: Proptypes.string,
  icon: Proptypes.icon,
  variant: Proptypes.string,
  onClick: Proptypes.function,
};

export default LoopieButton;
