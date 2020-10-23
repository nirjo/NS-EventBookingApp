import React ,{useEffect } from 'react';
import {  useSelector,useDispatch } from 'react-redux';

import {BrowserRouter as Router,  Switch,Route} from "react-router-dom";
import Main from './features/events/components/Main/Main';
import EventBookingFormWindow from './features/events/components/EventBookingFormWindow/EventBookingFormWindow';
import {   fetchEvents} from './features/events/eventsSlice' ;
import {   fetchBooking} from './features/events/bookingSlice' ;

function Init() {
	const dispatch =useDispatch();
	
	const eventsStatus = useSelector((state) => {return state.events.status})
	const bookingStatus = useSelector((state) => {return state.booking.status})

	useEffect(() => {	
		
		if(bookingStatus === "idle"){
			dispatch(fetchBooking());
		}
		if(eventsStatus === "idle" && bookingStatus === "succeeded"){
			dispatch(fetchEvents());
		}
		
	});
  return (
  <div>
    <Router>
  <Switch>
		<Route path="/book-event/:event_id">
            <EventBookingFormWindow />
          </Route>
          <Route path="">
			 <div>
				<Main />
			</div>
          </Route>
          
         
        </Switch>
  </Router>
  <div>
	hi i am the logger
  </div>
  </div>
  );
}

export default Init;
