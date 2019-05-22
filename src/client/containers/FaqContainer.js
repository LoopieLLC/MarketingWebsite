import React from 'react';
import {withRouter} from 'react-router';
import faqCTA from '../components/faq/FaqCTA';

class FaqContainer extends React.Component {

  render() {
    return <faqCTA />;
  }
}

export default withRouter(FaqContainer);
