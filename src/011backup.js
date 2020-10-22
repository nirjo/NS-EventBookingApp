import React ,{useEffect } from 'react';
import {   useSelector,useDispatch } from 'react-redux';

import {BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Main from './features/events/components/Main/Main';
import EventBookingFormWindow from './features/events/components/EventBookingFormWindow/EventBookingFormWindow';
import {   fetchEvents} from './features/events/eventsSlice' ;
import {   fetchBooking} from './features/events/bookingSlice' ;

function Init() {
	
  return (
    <div>
	<span>hi</span>
  </div>
  );
}

export default Init;
