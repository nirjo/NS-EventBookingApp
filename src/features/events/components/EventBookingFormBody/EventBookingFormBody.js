import React from 'react';

import styles from './EventBookingFormBody.module.css';
import EventBookingFormBodyInner from '../EventBookingFormBodyInner/EventBookingFormBodyInner';
import styled from 'styled-components';


const Wrapper = styled.section `
  background: papayawhip;
`;

const Container = styled.div `
   width: 1280px;
   min-width: 1280px;
   margin: 0 auto;
`;
const EventBookingFormBody = (props) => {
	
	return(
    <Wrapper>
<Container>
<EventBookingFormBodyInner  event_item={props.event_item} />
</Container>
</Wrapper>
    
);
}

EventBookingFormBody.propTypes = {};

EventBookingFormBody.defaultProps = {};

export default EventBookingFormBody;
