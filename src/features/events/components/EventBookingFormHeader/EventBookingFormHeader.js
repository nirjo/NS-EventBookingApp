import React from 'react';

import styles from './EventBookingFormHeader.module.css';
import { useSelector } from 'react-redux';
import {getBookedSeatCountByEvent } from '../../bookingSlice';

const EventBookingFormHeader = (props) => {
	const booking_save_status = useSelector((state) => {return state.events.save_status})
	 var available_seats =   (props.event_item!==undefined ? props.event_item.total_seats:0) -  useSelector((state) => getBookedSeatCountByEvent(state,  props.event_item))
	 const get_booking_saved_msg=()=>{
		 var msg = ""
		 if(booking_save_status==="succeeded")
			 msg="Note: Booking Saved!!"
		 return msg
	 }
	return(
  <div className={styles.EventBookingFormHeader} data-testid="EventBookingFormHeader">
	<p   >{props.event_item!==undefined?props.event_item.event_name:""}</p>
	<p className={styles.BookingSavedMsg}>{get_booking_saved_msg()}</p>
	<p>Number of available Seats: {available_seats}</p>
  </div>
);
}

EventBookingFormHeader.propTypes = {};

EventBookingFormHeader.defaultProps = {};

export default EventBookingFormHeader;
