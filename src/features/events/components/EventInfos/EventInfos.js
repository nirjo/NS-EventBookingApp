import React from 'react';

import styles from './EventInfos.module.css';

import {
 
  Link
  
} from "react-router-dom";


import {getBookedSeatCountByEvent } from '../../bookingSlice';
import { useSelector } from 'react-redux';
const EventInfos = (props) => {
	
	const booking_count = useSelector((state) => getBookedSeatCountByEvent(state,  props.an_event));;
	const book_now_or_sold_out=()=>{
		if(props.an_event.total_seats-booking_count<1)
			return <span className= {styles.buttonLink}   >Sold Out</span>
		else 
			return <Link className= {styles.buttonLink}  to={"/book-event/"+props.an_event.id} >Boook&nbsp;Now</Link>
		
	}
	
	
	return (
  <div className={styles.EventInfos}>
	<div  className={styles.EventInfosDateSeats}>
	 {props.an_event.event_date}
	  <p>Seats Available : {props.an_event.total_seats-booking_count}</p>
	</div>
	{/*
	<a className= {styles.buttonLink} href  = {"book-event?event_id="+props.an_event.id}>Boook&nbsp;Now</a>
	*/}
	{book_now_or_sold_out()}
	
		
	{/*<input type="Button" value="Book Now" />*/}
  </div>
);}

EventInfos.propTypes = {};

EventInfos.defaultProps = {};

export default EventInfos;
