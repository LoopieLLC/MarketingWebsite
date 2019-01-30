//its like the material design cards but more pretentious
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';

import {
  HashRouter
} from 'react-router-dom';

const styles = {
    borderRadius: 10,
};


export default class StickyNotes extends React.Component {


// the <> and </> are necessary to return multiline JSX

  render() {
    const styles = {
      root: {
        background: '#0085FF' 
      }
    }


    return <>
      <HashRouter>
       <CardActionArea onClick={event => {}}>
<<<<<<< HEAD
        <Card className="cards" classes={styles}>
=======
        <Card style={styles} className="cards">
>>>>>>> 518891d85d9b86fab01ce9c17e10068437d6315a
          <CardContent>
            <h3>{this.props.header}</h3>
            <p>{this.props.content}</p>
          </CardContent>
        </Card>
       </CardActionArea>
      </HashRouter> </>;
  }
}
