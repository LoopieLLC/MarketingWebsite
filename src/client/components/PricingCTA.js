import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';

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

const PricingCTA = ({CTAText, subtext, handleEmail, classes}) => (
  <main>
  </main>
);

export default PricingCTA;
