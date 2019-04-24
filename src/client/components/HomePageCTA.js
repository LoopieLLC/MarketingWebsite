import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import {withStyles} from '@material-ui/core/styles';
import {Spring} from 'react-spring/renderprops';
import {Chevron} from '../components/icons';

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
  <div className='home-page-cta'>
    <div className='split-container '>
      <Spring
        from={{opacity: 0, marginLeft: -500}}
        to={{opacity: 1, marginLeft: 0}}
      >
        {(props) => (
          <div className='split-image cta-image' style={props}></div>
        )}
      </Spring>
      <Spring
        from={{opacity: 0, marginLeft: 500}}
        to={{opacity: 1, marginLeft: 0}}
      >
        {(props) => (
          <div className='cta-slogan' style={props}></div>
        )}
      </Spring>

      <h3 className='cta-subtext text-dark'>{subtext}</h3>
      <div className='cta-btn'>
        <LoopieButton
          color='primary'
          text='Let&apos;s get started'
          className='text-light'
          variant='outlined'
        />
      </div>
      <div className='learnmore'>
        <LoopieButton text='Learn More' icon={<Chevron />}>
          <h4 className='cta-learnmore'>Learn more</h4>
        </LoopieButton>
        <div className='bar' />
      </div>

      <div className={classes.root} />
    </div>
  </div>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  classes: PropTypes.object,
  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageCTA);
