import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/placeholder1.jpg';
import Grid from '@material-ui/core/Grid';
import StickyNotes from './StickyNotes';
const HomePageCTA = ({CTAText, subtext}) => (
  <main>
  <div className='home-page-cta'>
        <h1 className='cta-text'>{CTAText}</h1>
        <h4 className='cta-subtext'>{subtext}</h4>
        <LoopieButton text='Lets get started' />
        <img className='cta-image' src={CTAImage} />
        <StickyNotes />
  </div>
  </main>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
}

export default HomePageCTA;
