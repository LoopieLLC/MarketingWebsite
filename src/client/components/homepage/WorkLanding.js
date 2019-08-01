import React from 'react';
import Jumbotron from '../Jumbotron';
const WorkLanding = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container split full-height">
      <Jumbotron
        header="24 hour turnaround"
        subtext="Your clothes, cleaned and delivered right to your doorstep"
      />
    </div>
  </React.Fragment>
);

export default WorkLanding;
