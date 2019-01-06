import React from 'react';
import PropTypes from 'prop-types';

import {HashRouter} from 'react-router-dom';

class HomePageContainer extends React.Component {
  state = {
    image: '',
    navItems: [
      {
        name: 'Home',
        url: '/home',
      },
      {
        name: 'Services',
        url: '/services',
      },
      {
        name: 'About Us',
        url: '/about',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
    ],
  }

  render() {
    return (
      this.props.children(this.state)
    );
  }
};

export default HomePageContainer;


