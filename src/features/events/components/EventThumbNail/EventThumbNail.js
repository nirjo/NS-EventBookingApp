import React from 'react';


import styles from './EventThumbNail.module.css';
import EventThumbNailImage from '../EventThumbNailImage/EventThumbNailImage';


const EventThumbNail = (props) => {
	return (
  <div  className={styles.EventThumbNail}>
  
	<EventThumbNailImage events_thumbnail_image = {props.events_thumbnail_image}/>
	
  </div>
);
}

EventThumbNail.propTypes = {};

EventThumbNail.defaultProps = {};

export default EventThumbNail;
