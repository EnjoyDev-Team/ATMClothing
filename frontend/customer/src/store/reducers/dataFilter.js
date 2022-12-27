import { createSlice } from '@reduxjs/toolkit';

const datafilter = createSlice({
  name: 'datafilters',
  initialState: Object,
  reducers: {
    addDataFilter: (state, action) => {
      state.products = (action.payload);
    },
    addDataPagination: (state, action) => {
      state.pagination = (action.payload);
    },
    addDataIsLoading: (state, action) => {
      state.isLoading = (action.payload);
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
export const { addDataFilter, addDataPagination, addDataIsLoading, updateDataFilter } = actions;
export default reducer;
