import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const LoopieButton = ({text, onClick}) => (
  <Button onClick={onClick} color='primary' size='medium' fullWidth={false} variant='contained'>{text}</Button>
);
<<<<<<< HEAD
//
//   handleColor(color) {
//     if (color == "blue") {
//       return "primary";
//     } else if (color == "yellow") {
//       return "secondary";
//     } else {
//       return "primary";
//     }
//   };
//
//
//   render() {
//     return <>
//             <Button
//               classes={{ label: 'button-text-light' }}
//               color={this.handleColor(this.props.color)}
//               size="medium"
//               variant="contained">
//               {this.props.text}
//             </Button>
//           </>;
//
//   }
// }
//
// LoopieButton.defaultProps = { color: 'blue', text: 'Eat my ass'}
=======

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
>>>>>>> 51f23b7ab833f07e07ce33307cb2f49292b9eab2

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
