import React from 'react';
import PropTypes from 'prop-types';
import HomePageCTA from '../components/HomePageCTA';
import HomePageIntro from '../components/HomePageCTA';
import Navbar from '../components/Navbar';
import {withRouter} from 'react-router';
import {loopieblue} from '../components/styles';
import backgroundSvg from '../../../public/images/background.svg';
import {Parallax} from 'react-scroll-parallax';

//import {Parallax, Background} from 'react-parallax';

class HomePageContainer extends React.Component {
  state = {
    image: '',
    navItems: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Pricing',
        url: '/pricing',
      },
      {
        name: 'About Us',
        url: '/aboutus',
      },
    ],
  };

  sendMail = () => {
    fetch ('/send-email', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify ({
        subject: 'Email test!',
        body: 'This is a test',
      }),
    })
      .then (function (response) {
        return response.json ();
      })
      .then (function (data) {
        console.log (data);
      })
      .catch (function (error) {
        console.error (error);
      });
  };

  render () {
    return (
      <React.Fragment>
        <Navbar items={this.state.navItems} />

        <Parallax
          className="background-parallax"
          offsetYMin={-300}
          offsetYMax={300}
        >
          <img src={backgroundSvg} />

        </Parallax>
        <HomePageCTA
          handleEmail={this.sendMail10}
          CTAText=" j"
          subtext="Flat rates, starting from $27.99"
        />
        <HomePageIntro />
      </React.Fragment>
    );
  }
}

export default withRouter (HomePageContainer);
