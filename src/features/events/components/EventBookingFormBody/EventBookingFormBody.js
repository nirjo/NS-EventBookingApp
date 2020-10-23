import React from 'react';

import styles from './EventBookingFormBody.module.css';
import EventBookingFormBodyInner from '../EventBookingFormBodyInner/EventBookingFormBodyInner';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Container = styled.div`
   width: 1280px;
   min-width: 1280px;
   margin: 0 auto;
   background: papayawhip ;
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
