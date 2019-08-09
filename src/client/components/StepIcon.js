import React from 'react';
import Proptypes from 'prop-types';

function StepIcon({title, subtext}){
	return(
		<div className="step-container">
			<div className="step-text">
				<h2>{title}</h2>
				<p>{subtext}</p>
			</div>
		</div>
	);
}

export default StepIcon;