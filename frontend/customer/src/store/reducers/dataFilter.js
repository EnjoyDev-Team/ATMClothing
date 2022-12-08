import { createSlice } from '@reduxjs/toolkit';

const datafilter = createSlice({
  name: 'datafilters',
  initialState: Object,
  reducers: {
    addDataFilter: (state, action) => {
      state.Object = (action.payload);
    },

    updateDataFilter: (state, action) => {
      const newDataFilter = action.payload;
      const dataFilterIdx = state.findIndex((datafilter) => datafilter.id === newDataFilter.id);

      if (dataFilterIdx >= 0) {
        state[dataFilterIdx] = newDataFilter;
      }
    },
  },
});

const { reducer, actions } = datafilter;
export const { addDataFilter, updateDataFilter } = actions;
export default reducer;
