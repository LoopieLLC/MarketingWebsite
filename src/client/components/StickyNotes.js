//its like the material design cards but more pretentious
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';

const StickyNotes = ({ to, header, content}) => (
   <CardActionArea onClick={event => {}}>
    <Card className="cards">
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

export default StickyNotes;
