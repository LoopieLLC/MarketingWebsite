import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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

const ServicesCTA = ({CTAText, subtext, classes}) => (
  <main>
  <div className='home-page-cta'>
    <div className="cta-container ">
      <div className='cta-image' style={{backgroundImage:"url(" + CTAImage+ ")"}}></div>
      <StickyNotes to='/' header='Hey! I&apos;m a card!' content='Card here. at your service!' color='#0085FF'/>
      <StickyNotes to='/' header='24 hour turnaround on every order' content='Card here. at your service!' color='#0085FF'/>
      {/*<h1 className='cta-text'>{CTAText}</h1>*/}
      <h3 className='cta-subtext text-dark'>{subtext}</h3>
      <div className='btn'>
        <LoopieButton text='Let&apos;s get started' className="text-light" variant="outlined"/>
      </div>
      <div className='bar'></div>
    <div className={classes.root} >
    
    </div>
   </div>
  </div>



  </main>
);

ServicesCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,

  handleEmail: PropTypes.func,
};

export default withStyles(styles)(ServicesCTA);
