import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue, notblack} from './styles';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const Chevron = () => {
  return(
    <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
    </svg>
  );
}


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const HomePageCTA = ({subtext, handleEmail, classes}) => (
  <div className="home-page-cta">
    <div className="split-container ">
      <div
        className="split-image cta-image"
        style={{backgroundImage: 'url(' + CTAImage + ')'}}
      />
      <div
        className="cta-slogan"
        style={{backgroundImage: 'url(' + CTASlogan + ')'}}
      />

      <h3 className="cta-subtext text-dark">{subtext}</h3>
      <div className="cta-btn">
        <LoopieButton
          color="primary"
          text="Let&apos;s get started"
          className="text-light"
          variant="outlined"
        />
      </div>
      <div className="learnmore">
        <LoopieButton text="Learn More" icon={<Chevron />}>
          <h4 className="cta-learnmore">Learn more</h4>
        </LoopieButton>
        <div className="bar" />
      </div>

      <div className={classes.root} />
    </div>
  </div>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,

  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageCTA);
