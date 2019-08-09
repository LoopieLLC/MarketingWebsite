import React from 'react';
import SplitText from '../SplitText';
import StepIcon from '../StepIcon';
import { StickyContainer, Sticky } from 'react-sticky';
//import searchimage from '../../../../public/images/animat-search-color.gif';

const HowItWorks2 = () => (
  <React.Fragment>
    <StickyContainer className="container-image-scroll">
      <Sticky>
        {({style}) => (<div className="sticky-image" style={style}/>)}
      </Sticky>
      <StepIcon title="Place an order with your phone." subtext=""  />
      <StepIcon title="A Driver will come to pick up your clothes" subtext=""  />
    </StickyContainer>
    <h1>HEYY</h1>
    <h1>HEYY</h1>
    <h1>HEYY</h1>
  </React.Fragment>
);

export default HowItWorks2;
