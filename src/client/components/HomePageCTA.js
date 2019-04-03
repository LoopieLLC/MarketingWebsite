import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';


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

const HomePageCTA = ({CTAText, subtext, handleEmail, classes}) => (
  <main>
  <div className='home-page-cta'>
    <div className="split-container ">
      <Spring
        from={{ opacity: 0, marginLeft: -500}}
        to={{ opacity: 1, marginLeft: 0}}
      >
        {props => (
          <div className='split-image cta-image' style={props}></div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginLeft: 500}}
        to={{ opacity: 1, marginLeft: 0}}
      >
        {props => (
          <div className='cta-slogan' style={props}></div>
        )}
      </Spring>
      <h1 className='cta-text'>{CTAText}</h1>
      <h3 className='cta-subtext text-dark'>{subtext}</h3>
      <div className='btn'>
        <LoopieButton text='Let&apos;s get started' className="text-light" variant="outlined"/>
      </div>
<<<<<<< HEAD
=======
      <h4 className='cta-learnmore'>Learn more</h4>
      <div className='bar'></div>
>>>>>>> 9561766ec359c0e71b5eecec0df720d59ad5a97c
    <div className={classes.root} >
    
    </div>
   </div>
  </div>
  </main>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageCTA);