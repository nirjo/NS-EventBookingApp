import React from 'react';

import styles from './EventBookingFormBody.module.css';
import EventBookingFormBodyInner from '../EventBookingFormBodyInner/EventBookingFormBodyInner';

const EventBookingFormBody = (props) => {
	
	return(

  <div className={styles.EventBookingFormBody} data-testid="EventBookingFormBody">
    <EventBookingFormBodyInner  event_item={props.event_item} />
  </div>
);
}

EventBookingFormBody.propTypes = {};

EventBookingFormBody.defaultProps = {};

export default EventBookingFormBody;
