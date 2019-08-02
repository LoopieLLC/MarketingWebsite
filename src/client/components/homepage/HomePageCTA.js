import React from 'react';
import PropTypes from 'prop-types';
import {Spring} from 'react-spring/renderprops';
import LoopieButton from '../LoopieButton';
import {Chevron} from '../icons';

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
        <a href="http://www.loopie.us">
          <LoopieButton variant="outlined">Let's Get Started</LoopieButton>
        </a>
      </div>
      <div className="learnmore">
        <LoopieButton
          variant="text"
          onClick={() =>
            window.scrollBy({top: 950, left: 0, behavior: 'smooth'})
          }
        >
          <Chevron /> Learn More
        </LoopieButton>

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
