import React from 'react';
import PropTypes from 'prop-types';

const SplitText = ({header, subtext, type}) => {
  if (!header) {
    return (
      <div className={type}>
        <p>{subtext}</p>
      </div>
    );
  }
  return (
    <div className={type}>
      <h3>{header}</h3>
      <p>{subtext}</p>
    </div>
  );
};

SplitText.propTypes = {
  header: PropTypes.string,
  subtext: PropTypes.string,
  type: PropTypes.string,
};

export default SplitText;
