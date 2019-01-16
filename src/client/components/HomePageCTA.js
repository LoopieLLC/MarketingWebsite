import React from 'react';
import PropTypes from 'prop-types';
import BUtton from './Button';
import {HashRouter} from 'react-router-dom';
import Button from './Button';
import CTAImage from '../../../public/images/placeholder1.jpg';
import Grid from '@material-ui/core/Grid';

const HomePageCTA = ({CTAText, subtext}) => (
  <div className='home-page-cta'>
    <Grid container spacing={0}>
      <Grid item xs={12} md={6}>
        <h1 className='cta-text'>{CTAText}</h1>
        <h4 className='cta-subtext'>{subtext}</h4>
        <Button text='Lets get started' />
      </Grid>
      <Grid item xs={12} md={6}>
        <img className='cta-image' src={CTAImage} />
      </Grid>
    </Grid>
  </div>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
}

export default HomePageCTA;
