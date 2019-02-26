//its like the material design cards but more pretentious
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
let styles = {
    borderRadius: 10,
    backgroundColor: this.props.color,
};

const StickyNotes = ({ to, header, content}) => (
   <CardActionArea onClick={event => {}}>
    <Card style={styles} className="cards">
      <CardContent>
        <h3>{header}</h3>
        <p>{content}</p>
      </CardContent>
    </Card>

   </CardActionArea>
);

StickyNotes.propTypes = {
  to: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
 /*
  *  url: url,
  *  header: string,
  *  content: string,
  *  color: default / primary
  *
  */
}
<<<<<<< HEAD
=======

export default StickyNotes;

//export default class StickyNotes extends React.Component {
>>>>>>> b4a3668740d9c17c00859d507ce0695354fc566c


// the <> and </> are necessary to return multiline JSX
<<<<<<< HEAD
=======
//}
>>>>>>> b4a3668740d9c17c00859d507ce0695354fc566c
