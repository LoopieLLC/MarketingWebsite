import React from 'react';
import PropTypes from 'prop-types';
import BUtton from './Button';
import {HashRouter} from 'react-router-dom';
import Button from './Button';
import CTAImage from '../../../public/images/placeholder1.jpg';

const HomePageCTA = ({CTAText, subtext}) => (
  <div className='home-page-cta'>
    <div className='cta-container'>
      <h1 className='cta-text'>{CTAText}</h1>
      <h4 className='cta-subtext'>{subtext}</h4>
      <Button text='Lets get started' />
    </div>
    <img className='cta-image' src={CTAImage} />
  </div>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
}

export default HomePageCTA;