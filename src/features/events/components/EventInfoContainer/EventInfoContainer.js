import React from 'react';

import EventInfos from '../EventInfos/EventInfos';
import styles from './EventInfoContainer.module.css';
const EventInfoContainer = (props) => (
  <div  className={styles.EventInfoContainer}>
  
	<EventInfos an_event={props.an_event}/>
  </div>
);

EventInfoContainer.propTypes = {};

EventInfoContainer.defaultProps = {};

export default EventInfoContainer;
