import React from 'react';
import HomePageCTA from '../components/HomePageCTA';
import HomePageIntro from '../components/HomePageIntro';
import {withRouter} from 'react-router';

class HomePageContainer extends React.Component {
  state = {
    image: '',
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
        <HomePageCTA
          handleEmail={this.sendMail}
          CTAText=" "
          subtext="Flat rates, starting from $27.99"
        />
        <HomePageIntro />
      </React.Fragment>
    );
  }
}

export default withRouter (HomePageContainer);
