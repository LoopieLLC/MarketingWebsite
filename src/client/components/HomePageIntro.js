import React from 'react';
import PropTypes from 'prop-types';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import {withStyles} from '@material-ui/core/styles';

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
  <div className='intro-page-cta'>
    <div className='intro-container'>
      <StickyNotes to='' header='Sticky Note' content='This is a sticky note.' color={loopieblue} type='sticky-price left'/>
      <StickyNotes to='' header='Sticky Note' content='This is a sticky note.' color={loopieblue} type='sticky-price center'/>
      <StickyNotes to='' header='Sticky Note' content='This is a sticky note.' color={loopieblue} type='sticky-price right'/>
    </div>
  </div>
);

HomePageIntro.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  classes: PropTypes.object,
  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageIntro);
