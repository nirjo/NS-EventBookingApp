import React from 'react';

import styles from './EventBookingFormBodyInner.module.css';


import EventBookingFormContainer from '../EventBookingFormContainer/EventBookingFormContainer';
import EventBookingFormThumbnailContainer from '../EventBookingFormThumbnailContainer/EventBookingFormThumbnailContainer';

const EventBookingFormBodyInner = (props) => {

	return(
	
	  <div className={styles.EventBookingFormBodyInner} data-testid="EventBookingFormBodyInner">
		<EventBookingFormThumbnailContainer event_item = {props.event_item} />
		<EventBookingFormContainer event_item = {props.event_item} />
	  </div>
	)
};



export default EventBookingFormBodyInner;
