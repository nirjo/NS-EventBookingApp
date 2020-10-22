import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit'
import { client } from '../../api/client'
const eventsAdapter = createEntityAdapter({
  
})
const initialState = eventsAdapter.getInitialState({
  status: 'idle',
  error: null,
})
export const fetchEvents = createAsyncThunk('fetch/events', async () => {
  const response = await client.get('https://events-api-nir-2k20.herokuapp.com/events')
 
  return response
})
export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
	},
	
  extraReducers: {
    [fetchEvents.pending]: (state, action) => {
      state.status = 'loading'	 
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.status = 'succeeded'	 
	   eventsAdapter.upsertMany(state, action.payload)
	},
    [fetchEvents.rejected]: (state, action) => {
      state.status = 'failed'

      state.error = action.error.message
	},
   
  }
});

export const {
  selectAll: selectAllEvents   ,
  selectById: selectEventById,
} = eventsAdapter.getSelectors((state) => state.events)

export const selectEventsByQuery = createSelector(
  [selectAllEvents, (state, query) => query],
  (events, query) => {
	  
	if(events===undefined|| query===undefined || events.length===0|| query.value.trim()==="")
		return events;
	else{
		return events.filter((an_event) => an_event.event_name.trim().toLowerCase().includes(query.value.trim().toLowerCase()) )		
	}
  }
  
)

export default eventsSlice.reducer