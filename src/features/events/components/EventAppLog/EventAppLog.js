import React,{useState}  from 'react';
import {getLastInsertBooking } from '../../bookingSlice';
import styles from './EventAppLog.module.css';
import { useSelector } from 'react-redux';

const EventAppLog = (props) => {
	const booking_save_status = useSelector((state) => {return state.booking.save_status})
	const idToLog = useSelector((state) => {return state.booking.last_insert_booking_id})
	const [lastBookingId, setLastBookingId] = useState(null);
	
	// completed
	console.log(booking_save_status)
	console.log(idToLog)
	console.log(lastBookingId)
	if(booking_save_status==="completed" && idToLog!==lastBookingId){
		setLastBookingId(idToLog)
		console.log("11")
		var p = document.createElement("p");                
		var t = document.createTextNode("Water");        
		p.appendChild(t);                             
		document.getElementById("logText").appendChild(p);
	}
return(
  <div className={styles.EventAppLog}>
	  <div id="logText">
	  </div>
  </div>
);
}

EventAppLog.propTypes = {};

EventAppLog.defaultProps = {};

export default EventAppLog;
