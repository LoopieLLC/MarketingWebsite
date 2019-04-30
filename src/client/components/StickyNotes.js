import React from 'react';
import PropTypes from 'prop-types';

const StickyNotes = ({to, header, content, type}) => {
  return (
    <div className={type}>
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
  );
};

StickyNotes.propTypes = {
  to: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
};

export default StickyNotes;

// export default class StickyNotes extends React.Component {

// the <> and </> are necessary to return multiline JSX
// }
