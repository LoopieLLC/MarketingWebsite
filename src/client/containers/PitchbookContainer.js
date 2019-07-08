import React from 'react';
import {withRouter} from 'react-router';
import PitchbookLanding from '../components/partner/PitchbookLanding';

class PitchbookContainer extends React.Component {
  state = {
    image: '',
  };

  render() {
    return <PitchbookLanding />;
  }
}

export default withRouter(PitchbookContainer);
