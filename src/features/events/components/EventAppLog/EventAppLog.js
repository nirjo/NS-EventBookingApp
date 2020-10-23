import React,{useState}  from 'react';

import styles from './EventAppLog.module.css';
import { useSelector } from 'react-redux';
import {getBookToLog} from '../../bookingSlice';

const EventAppLog = (props) => {
	const [prevId, setPrevId] = useState(null);
	const booking_save_status = useSelector((state) => {return state.booking.save_status})
	const idToLog = useSelector((state) => {return state.booking.last_insert_booking_id})
	const [lastBookingId, setLastBookingId] = useState(null);
	// console.log(useSelector((state) => getBookToLog(state)))
	const x = useSelector((state) => getBookToLog(state))
	// completed
	if( x.length>0){
		console.log("----------"+prevId+"--------------"+x[0].id)
		if(prevId!=x[0].id){
			console.log("||||||||||||||")
			console.log(x[0])
			setPrevId(x[0].id)
			console.log("||||||||||||||")
		}
	}
	
	if(booking_save_status==="completed" && idToLog!==lastBookingId && lastBookingId!=null){
		
		setLastBookingId(idToLog)
		
		
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
