import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/placeholder1.jpg';
import Grid from '@material-ui/core/Grid';
import StickyNotes from './StickyNotes';

const HomePageCTA = ({CTAText, subtext, handleEmail}) => (
  <main>

    <div className='home-page-cta'>
      <h1 className='cta-text'>{CTAText}</h1>
      <h4 className='cta-subtext'>{subtext}</h4>
      <img className='cta-image' src={CTAImage} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b4a3668740d9c17c00859d507ce0695354fc566c

    </div>


  <div className='home-page-cta'>
        <h1 className='cta-text'>{CTAText}</h1>
        <LoopieButton text='Lets get started' color="blue" className="text-light"/>
        <h4 className='cta-subtext'>{subtext}</h4>
        <img className='cta-image' src={CTAImage} />

  </div>
<<<<<<< HEAD
=======
=======
      <StickyNotes header="owo" content="owo" color={styles.loopieblue} />
    </div>
>>>>>>> 51f23b7ab833f07e07ce33307cb2f49292b9eab2
>>>>>>> b4a3668740d9c17c00859d507ce0695354fc566c
  </main>
);

HomePageCTA.propTypes = {
  CTAText: PropTypes.string,
  subtext: PropTypes.string,
  handleEmail: PropTypes.func,
};

export default HomePageCTA;
