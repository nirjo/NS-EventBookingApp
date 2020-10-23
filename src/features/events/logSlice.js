import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit'
import { client } from '../../api/client'
const logAdapter = createEntityAdapter({
  
})
const initialState = logAdapter.getInitialState({
  // status: 'idle',
  // error: null,
  // save_status : 'pending',
  // last_insert_booking_id : null
})

export const logSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
	
		logData(state,action) {
			console.log("log data")
		  // console.log(action.payload)
		 
		},
	},
	
});
export const { logData  } = logSlice.actions;
export default logSlice.reducer
