import React from 'react';
import PropTypes from 'prop-types';
import StickyNotes from './StickyNotes';
import SplitText from './SplitText';
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
  //TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className='split-container-text'>
      <SplitText header='Why Choose Loopie Laundry?' type='split-text left'/>
      <SplitText subtext='Ya betta choose it' type='split-text right'/>
    </div>
    <div className='sticky-container'>
      <StickyNotes to='' header='24 hour turnaround on every order' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' type='sticky-basic left'/>
      <StickyNotes to='' header='Sticky Note' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' type='sticky-basic center'/>
      <StickyNotes to='' header='Sticky Note' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' type='sticky-basic right'/>
    </div>
  </React.Fragment>
);

HomePageIntro.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  classes: PropTypes.object,
  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageIntro);
