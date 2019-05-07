import React from 'react';

// import containers for homepage
import HomePageCTA from '../components/homepage/HomePageCTA';
import HomePageIntro from '../components/homepage/HomePageIntro';
import HomePagePricing from '../components/homepage/HomePagePricing';
import WorkLanding from '../components/homepage/WorkLanding';
import PartnerLanding from '../components/homepage/PartnerLanding';
import HowItWorks from '../components/homepage/HowItWorks';

// import router
import {withRouter} from 'react-router';

class HomePageContainer extends React.Component {
  state = {
    image: '',
  };

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
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <HomePageCTA
          handleEmail={this.sendMail}
          CTAText=" "
          subtext="Flat rates, starting from $27.99"
        />
        <HomePageIntro />
        <HomePagePricing />
        <HowItWorks />
        <WorkLanding />
        <PartnerLanding />
      </React.Fragment>
    );
  }
}

export default withRouter(HomePageContainer);
