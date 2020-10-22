import React from 'react';

import styles from './EventListItem.module.css';
import EventTitle from '../EventTitle/EventTitle';
import EventShortDescContainer from '../EventShortDescContainer/EventShortDescContainer';

const EventListItem = (props) => {
	// console.log(props);
	// console.log(props.an_event.event_name);
	return(
  <div className={styles.EventListItem} >
    <EventTitle event_name={props.an_event.event_name}/>
	<EventShortDescContainer an_event={props.an_event}/>
  </div>
);
}
EventListItem.propTypes = {};

EventListItem.defaultProps = {};

export default EventListItem;
