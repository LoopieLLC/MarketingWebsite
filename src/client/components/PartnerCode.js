import React from 'react';
import Proptypes from 'prop-types';

function PartnerCode({code}) {
  return (
    <div className="code">
      <div className="title">
        <h3>Code:</h3>
      </div>
      <div className="value">
        <h3>{code}</h3>
      </div>
    </div>
  );
}

PartnerCode.propTypes = {
  code: Proptypes.string,
};

export default PartnerCode;
