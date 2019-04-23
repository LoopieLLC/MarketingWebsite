import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue, notblack} from './styles';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Spring} from 'react-spring/renderprops';

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

const HomePageIntro = ({subtext, handleEmail, classes}) => (
  <div className="intro-page-cta">
    <div className="intro-container">
    	<StickyNotes to="" header="Sticky Note" content="This is a sticky note." color={loopieblue} type="sticky-price center"/>
    </div>
  </div>
);

HomePageIntro.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,

  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageIntro);