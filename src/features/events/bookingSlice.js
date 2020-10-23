import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit'
import { client } from '../../api/client'
const bookingAdapter = createEntityAdapter({
  
})
const initialState = bookingAdapter.getInitialState({
  status: 'idle',
  error: null,
  save_status : 'pending'
})
export const addNewBooking = createAsyncThunk(
  'addNewBooking/booking',
  async (booking) => {
    const response = await client.post('https://events-api-nir-2k20.herokuapp.com/booking', booking)
    return response
  }
)

export const fetchBooking = createAsyncThunk('fetch/booking', async () => {
  const response = await client.get('https://events-api-nir-2k20.herokuapp.com/booking')
 
  return response
})
export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
	 test: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
   
	 
    },
	setSaveStatusToPending(state,action) {
      state.save_status = 'pending'
    },
    setSaveStatusToCompleted(state,action) {
      state.save_status = 'pending'
    },
	},
	
  extraReducers: {
    [fetchBooking.pending]: (state, action) => {
      state.status = 'loading'	 
    },
    [fetchBooking.fulfilled]: (state, action) => {
      state.status = 'succeeded'	 
	   bookingAdapter.upsertMany(state, action.payload)
	  
		
    },
    [fetchBooking.rejected]: (state, action) => {
      state.status = 'failed'

      state.error = action.error.message
	  
    },
	
     // [addNewBooking.fulfilled]: bookingAdapter.addOne,
     [addNewBooking.fulfilled]: (state,  action)=>{
		 
		
		   bookingAdapter.addOne(state,action.payload);
		    state.save_status = 'succeeded'	 
			
			console.log("Saved Data:")
			console.log(action.payload)
	 }
     
   
  }
});
export const { test,setSaveStatusToPending,setSaveStatusToCompleted  } = bookingSlice.actions;
export const {
  selectAll: selectAllBooking   ,
  selectById: selectBookingById,
} = bookingAdapter.getSelectors((state) => state.booking)

export const selectBookingByEventId = createSelector(
  [selectAllBooking, (state, event_id) => event_id],
  (booking, event_id) => {
	 
	if(booking===undefined|| event_id===undefined || event_id.length===0|| event_id==="")
		return booking;
	else{
		return booking.filter((a_booking) => a_booking.event_id === event_id )		
	}
	  
  }
  
)
export const getBookedSeatCountByEvent = createSelector(
  [selectAllBooking, (state, an_event) => an_event],
  (booking, an_event) => {
	var ret = 0;
	if(booking===undefined|| an_event===undefined )
		return 0;
	else{
		booking.filter((a_booking) => a_booking.event_id === an_event.id ).forEach((elem)=>	{
			ret += elem.participants.length
		})
	
	}
	return ret;  
	 
  }
  
)

export default bookingSlice.reducer