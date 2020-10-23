import React from 'react';
import styles from './EventListContainer.module.css';
import EventSeacrhContainer from '../EventSeacrhContainer/EventSeacrhContainer';
import EventList from '../EventList/EventList';

import { useSelector, useDispatch } from 'react-redux';
import {searchChanged } from '../../searchSlice';


import {  selectEventsByQuery } from '../../eventsSlice' ;
const EventListContainer = (props) => {
	const dispatch =useDispatch();
	
	
	 
	
	const onSearchStringChanged = (str) =>{
		 dispatch(searchChanged(str))
	}
	 

	const fetchedEvents = useSelector(state =>selectEventsByQuery(state,state.search));
	
	
	return (
  <div className={styles.EventListContainer} >
	<EventSeacrhContainer onSearchStringChanged={onSearchStringChanged} />
	<EventList events={fetchedEvents} />
  </div>
)};

EventListContainer.propTypes = {};

EventListContainer.defaultProps = {};

export default EventListContainer;
