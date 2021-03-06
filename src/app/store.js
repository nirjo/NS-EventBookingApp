import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// make the comment work
import eventsSlice from '../features/events/eventsSlice';
import searchSlice from '../features/events/searchSlice';
import bookingSlice from '../features/events/bookingSlice';
import logSlice from '../features/events/logSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    events: eventsSlice,
    booking: bookingSlice,
    search: searchSlice,
    log: logSlice,
  },
});
