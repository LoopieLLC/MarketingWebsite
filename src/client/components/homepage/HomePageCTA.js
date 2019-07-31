import React from 'react';
import PropTypes from 'prop-types';
import {Spring} from 'react-spring/renderprops';
import LoopieButton from '../LoopieButton';
import {Chevron} from '../icons';



//Event snippet for Sign Up Button conversion page
//In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-797201564/4NQWCJSO4qYBEJypkfwC',
        'event_callback': callback
    });
    return false;
};

const HomePageCTA = ({subtext, handleEmail, classes}) => (
  <div className="home-page-cta">
    <div className="container split full-height">
      <Spring
        from={{opacity: 0, marginLeft: -500}}
        to={{opacity: 1, marginLeft: 0}}
      >
        {(props) => <div className="split-image cta-image" style={props} />}
      </Spring>
      <Spring
        from={{opacity: 0, marginLeft: 500}}
        to={{opacity: 1, marginLeft: 0}}
      >
        {(props) => <div className="cta-slogan" style={props} />}
      </Spring>

      <h3 className="cta-subtext text-dark">{subtext}</h3>
      <div className="cta-btn">
        <a>
          <LoopieButton
            color="primary"
            text="Let's get started"
            variant="outlined"
            onClick={ () => gtag_report_conversion("https://www.loopie.us")}
          />
        </a>
      </div>
      <div className="learnmore">
        <LoopieButton
          variant="text"
          text="Learn More"
          icon={<Chevron />}
          onClick={() =>
            window.scrollBy({top: 950, left: 0, behavior: 'smooth'})
          }
        />
        <div className="bar" />
      </div>
    </div>
  </div>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  classes: PropTypes.object,
  handleEmail: PropTypes.func,
};

export default HomePageCTA;
