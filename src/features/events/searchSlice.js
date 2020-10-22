import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: "",
  },

  reducers: {
    searchChanged:  (state, action)  => {
		
		state.value = action.payload;
		
    }
  },
});

export const { searchChanged} = searchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.search.value)`
export const selectSearch = state => state.search.value;

export default searchSlice.reducer;
