import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

//export default class LoopieButton extends React.Component {
const LoopieButton = ({text, onClick, variant}) => (
  <Button onClick={onClick} color='primary' size='medium' fullWidth={false} variant={variant}>{text}</Button>
);
 
LoopieButton.defaultProps = { color: 'blue', text: 'Eat my ass'}


//
// const Button = ({text, onClick}) => (
//   <button onClick={onClick} className='btn btn-primary'>{text}</button>
// );
//
// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
//
// export default Button;

LoopieButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default LoopieButton;
