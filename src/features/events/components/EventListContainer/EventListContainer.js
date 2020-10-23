import React from 'react';
import styles from './EventListContainer.module.css';
import EventSeacrhContainer from '../EventSeacrhContainer/EventSeacrhContainer';
import EventList from '../EventList/EventList';

import { useSelector, useDispatch } from 'react-redux';
import {searchChanged } from '../../searchSlice';
import {  selectEventsByQuery } from '../../eventsSlice' ;

import styled from 'styled-components';

const Container = styled.div`
   width: 1280px;
   min-width: 1280px;
   /* height: 1280px;
   min-height: 300px; */
   margin: 0 auto;
   background: papayawhip ;
`;

const EventListContainer = (props) => {
	const dispatch =useDispatch();
	
	
	 
	
	const onSearchStringChanged = (str) =>{
		 dispatch(searchChanged(str))
	}
	 

	const fetchedEvents = useSelector(state =>selectEventsByQuery(state,state.search));
	
	
	return (
		<Container>
	<EventSeacrhContainer onSearchStringChanged={onSearchStringChanged} />
	<EventList events={fetchedEvents} />
	</Container>
)};

EventListContainer.propTypes = {};

EventListContainer.defaultProps = {};

export default EventListContainer;
