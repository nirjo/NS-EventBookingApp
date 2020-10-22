import React from 'react';


import styles from './EventList.module.css';
import EventListItem from '../EventListItem/EventListItem';

const EventList = (props) => {

	const listItems = props.events.map((elem) =>
    <EventListItem an_event={elem} key={elem.id}/>
  );
	return (

  <div className={styles.EventList}>
    
	{listItems}
  </div>
);
}
EventList.propTypes = {};

EventList.defaultProps = {};

export default EventList;
