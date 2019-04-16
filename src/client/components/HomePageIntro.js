import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
import CTAImage from '../../../public/images/cover.jpg';
import CTASlogan from '../../../public/images/CTASlogan.svg';
import StickyNotes from './StickyNotes';
import {loopieblue} from './styles';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

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

const HomePageIntro = ({Title, Features}) => (
  <div className="home-page-intro">
    <div className="container full" />
  </div>
);

HomePageIntro.propTypes = {
  Title: PropTypes.string,
  Features: PropTypes.string,

  //   handleEmail: PropTypes.func,
};

export default withStyles (styles) (HomePageIntro);
