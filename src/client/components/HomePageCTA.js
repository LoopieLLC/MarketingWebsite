import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/placeholder1.jpg';
import Grid from '@material-ui/core/Grid';
import StickyNotes from './StickyNotes';

import * as styles from './styles';

const HomePageCTA = ({CTAText, subtext}) => (
  <main>

  <div className='home-page-cta'>
        <h1 className='cta-text'>{CTAText}</h1>
        <LoopieButton text='Lets get started' color="blue" className="text-light"/>
        <h4 className='cta-subtext'>{subtext}</h4>
        <img className='cta-image' src={CTAImage} />
        <StickyNotes header="owo" content="owo" color={styles.loopieblue} />
  </div>
  </main>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
}

export default HomePageCTA;
