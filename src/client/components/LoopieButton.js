import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const LoopieButton = ({text, onClick}) => (
  <Button onClick={onClick} color='primary' size='medium' fullWidth={false} variant='contained'>{text}</Button>
);

LoopieButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoopieButton;
