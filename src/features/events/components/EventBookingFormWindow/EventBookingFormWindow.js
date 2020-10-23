import React from 'react';

import styles from './EventBookingFormWindow.module.css';
import EventBookingFormHeader from '../EventBookingFormHeader/EventBookingFormHeader';
import EventBookingFormBody from '../EventBookingFormBody/EventBookingFormBody';
import {   selectEventById} from '../../eventsSlice' ;
import {   setSaveStatusToPending} from '../../bookingSlice' ;
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
const Wrapper = styled.section `
  background: papayawhip;
`;
const Title = styled.h1 `
  font-size: 0em;
  text-align:center;
  color: blueviolet; 
  
`;


const Container = styled.div `
   width: 1280px;
   min-width: 1280px;
   margin: 0 auto;
`;
const EventBookingFormWindow  = (props) => {
	
	
	const dispatch= useDispatch()
	dispatch(setSaveStatusToPending())

	 const an_event = useSelector((state) => selectEventById(state,props.match.params.event_id))
	 
	return (
	  <div className={styles.EventBookingFormWindow} data-testid="EventBookingFormWindow">
		<Wrapper>
		<Container>
		<EventBookingFormHeader event_item={an_event} />
		<EventBookingFormBody event_item={an_event}/>
		</Container>
		</Wrapper>
		</div>
	);
}
EventBookingFormWindow.propTypes = {};

EventBookingFormWindow.defaultProps = {};

export default withRouter(EventBookingFormWindow);
