import React from 'react';

import styles from './EventShortDescContainer.module.css';
import EventThumbNail from '../EventThumbNail/EventThumbNail';
import EventInfoContainer from '../EventInfoContainer/EventInfoContainer';


				

const EventShortDescContainer = (props) => {
return(
  <div  className={styles.EventShortDescContainer}>
    <EventThumbNail events_thumbnail_image={props.an_event.events_thumbnail_image}/>
	<EventInfoContainer an_event = {props.an_event}/>
  </div>
);
}

EventShortDescContainer.propTypes = {};

EventShortDescContainer.defaultProps = {};

export default EventShortDescContainer;
