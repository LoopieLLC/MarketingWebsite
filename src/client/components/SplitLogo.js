import React from 'react';
import Proptypes from 'prop-types';
import logo from '../../../public/images/logo.svg';

function SplitLogo({partner, partneralt}) {
  return (
    <span className="split-loopie">
      <img className="logo-left" src={partner} alt={partneralt} />
      <h3 className="logo-text"> + </h3>
      <img className="logo-right" src={logo} alt="Loopie Laundry" />
    </span>
  );
}

SplitLogo.propTypes = {
  partner: Proptypes.any,
  partneralt: Proptypes.string,
};

export default SplitLogo;
