import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
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
          text="Let&apos;s get started"
          className="text-light"
          variant="outlined"
        />
      </div>
      <div className="learnmore">
        <a href="#intro"><h4 className="cta-learnmore">Learn more</h4></a>
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

export default withStyles (styles) (HomePageCTA);
