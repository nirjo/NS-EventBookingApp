import React from 'react';

import styles from './EventBookingFormWindow.module.css';
import EventBookingFormHeader from '../EventBookingFormHeader/EventBookingFormHeader';
import EventBookingFormBody from '../EventBookingFormBody/EventBookingFormBody';
import {   selectEventById} from '../../eventsSlice' ;
import {   setSaveStatusToPending} from '../../bookingSlice' ;
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";

const EventBookingFormWindow  = (props) => {
	

	const dispatch= useDispatch()
	dispatch(setSaveStatusToPending())

	 const an_event = useSelector((state) => selectEventById(state,  props.match.params.event_id))
	 
	return (
	  <div className={styles.EventBookingFormWindow} data-testid="EventBookingFormWindow">
		
		<EventBookingFormHeader event_item={an_event} />
		<EventBookingFormBody event_item={an_event}/>
	  </div>
	);
}
EventBookingFormWindow.propTypes = {};

EventBookingFormWindow.defaultProps = {};

export default withRouter(EventBookingFormWindow);
