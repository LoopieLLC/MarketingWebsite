import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/placeholder1.jpg';
import Grid from '@material-ui/core/Grid';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const  styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const HomePageCTA = ({CTAText, subtext, handleEmail}) => (
  <main>

  <div className='home-page-cta'>

    <div className={ styles.root}>
     <Grid container spacing={24}>
       <Grid item xs={12}>
         <Paper className={ styles.paper}>xs=12</Paper>
       </Grid>
       <Grid item xs={6}>
         <Paper className={ styles.paper}>xs=6</Paper>
       </Grid>
       <Grid item xs={6}>
         <Paper className={ styles.paper}>xs=6</Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={ styles.paper}>xs=3</Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={ styles.paper}>xs=3</Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={ styles.paper}>xs=3</Paper>
       </Grid>
       <Grid item xs={3}>
         <Paper className={ styles.paper}>xs=3</Paper>
       </Grid>
     </Grid>
   </div>
        <h1 className='cta-text'>{CTAText}</h1>
        <LoopieButton text='Lets get started' color="blue" className="text-light" variant = "contained"/>
        <h4 className='cta-subtext'>{subtext}</h4>
        <img className='cta-image' src={CTAImage} />
  </div>

   <StickyNotes header="owo" content="owo" color={loopieblue} />


  </main>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  handleEmail: PropTypes.func,
};

export default withStyles(styles)(HomePageCTA);
