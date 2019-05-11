import React from 'react';
import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';
import HowSlides from './HowSlides.js';

const HowItWorks = () => (
	// TODO: make it look better, add real text, shadows? animations?
	<React.Fragment>
		<div className="container full">
			<div className="title one">
				<SplitText header="How it works" type="split-text left" />
				<SplitText
					subtext="Our certified washers and drivers make laundry a breeze."
					type="split-text right"
				/>
			</div>
			<HowSlides/>
		</div>
	</React.Fragment>
);

export default HowItWorks;
