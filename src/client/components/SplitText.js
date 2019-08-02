import React from 'react';
import Proptypes from 'prop-types';

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
  header: Proptypes.string,
  subtext: Proptypes.string,
  type: Proptypes.string,
};

export default SplitText;
