import React from 'react';
import PropTypes from 'prop-types';


class ServicesContainer extends React.Component {
  render() {
    return (
      this.props.children(this.state)
    );
  }
};

export default ServicesContainer;


