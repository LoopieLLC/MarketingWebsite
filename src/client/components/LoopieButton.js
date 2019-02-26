import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default class LoopieButton extends React.Component {
const LoopieButton = ({text, onClick}) => (
  <Button onClick={onClick} color='primary' size='medium' fullWidth={false} variant='contained'>{text}</Button>
);

  handleColor(color) {
    if (color == "blue") {
      return "primary";
    } else if (color == "yellow") {
      return "secondary";
    } else {
      return "primary";
    }
  }


  render() {
    return <>
            <Button
              classes={{ label: 'button-text-light' }}
              color={this.handleColor(this.props.color)}
              size="medium"
              variant="contained">
              {this.props.text}
            </Button>
          </>;

  }
}

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
};

export default LoopieButton;
