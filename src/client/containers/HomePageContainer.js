import React, {lazy, Suspense} from 'react';

// import containers for homepage
// import HomePageCTA from '../components/homepage/HomePageCTA';
// import HomePageIntro from '../components/homepage/HomePageIntro';
// import HomePagePricing from '../components/homepage/HomePagePricing';
// import WorkLanding from '../components/homepage/WorkLanding';
// import HowItWorks from '../components/homepage/HowItWorks';

const HomePageCTA = lazy(() => import('../components/homepage/HomePageCTA'));
const HomePageIntro = lazy(() =>
  import('../components/homepage/HomePageIntro'),
);
const HomePagePricing = lazy(() =>
  import('../components/homepage/HomePagePricing'),
);
const WorkLanding = lazy(() => import('../components/homepage/WorkLanding'));
const HowItWorks = lazy(() => import('../components/homepage/HowItWorks'));

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
        <Suspense fallback={<h1>test</h1>}>
          <HomePageCTA
            handleEmail={this.sendMail}
            CTAText=" "
            subtext="Flat rates, starting from $29.99"
          />
          <HomePageIntro />
          <HomePagePricing />
          <WorkLanding />
          <HowItWorks />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePageContainer);
