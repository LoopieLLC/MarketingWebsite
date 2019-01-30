//its like the material design cards but more pretentious
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import {
  HashRouter
} from 'react-router-dom';

export default class StickyNotes extends React.Component {

// the <> and </> are necessary to return multiline JSX

  render() {
    return <>
      <HashRouter>
       <CardActionArea onClick={event => {}}>
        <Card className="cards">
          <CardContent>
            <h3>{this.props.header}</h3>
            <p>{this.props.content}</p>
          </CardContent>
        </Card>
       </CardActionArea>
      </HashRouter> </>;
  }
}
