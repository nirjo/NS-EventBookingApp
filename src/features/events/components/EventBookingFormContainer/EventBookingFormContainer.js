import React from 'react';

import styles from './EventBookingFormContainer.module.css';
import EventBookingForm from '../EventBookingForm/EventBookingForm';



const EventBookingFormContainer = (props) => {
	
	return (
  <div className={styles.EventBookingFormContainer} data-testid="EventBookingFormContainer" event_item = {props.event_item}>
   <EventBookingForm event_item = {props.event_item}/>
  </div>
);
}

EventBookingFormContainer.propTypes = {};

EventBookingFormContainer.defaultProps = {};

export default EventBookingFormContainer;
