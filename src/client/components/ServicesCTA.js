import React from 'react';
import PropTypes from 'prop-types';
import LoopieButton from './LoopieButton';
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

const ServicesCTA = ({CTAText, subtext, handleEmail, classes}) => (
    <main>
    </main>
);

export default withStyles(styles)(ServicesCTA);