import React from 'react';
import PropTypes from 'prop-types';
import HomePageCTA from '../components/HomePageCTA';
import Navbar from '../components/Navbar';
import {withRouter} from 'react-router';

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

    ],
  }

  sendMail = () => {
    fetch('/send-email', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        subject: 'Email test!',
        body: 'This is a test',
      }),
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    }).catch(function(error) {
      console.error(error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar items={this.state.navItems}/>
        <HomePageCTA handleEmail={this.sendMail} CTAText=' ' subtext='Flat rates, starting from $27.99' />
      </React.Fragment>
    );
  }
}

export default withRouter(HomePageContainer);
