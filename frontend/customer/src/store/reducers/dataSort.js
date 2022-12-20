import { createSlice } from '@reduxjs/toolkit';

const datasort = createSlice({
  name: 'datasorts',
  initialState: {
    sort: '',
    offset: '',
    isPagination: false
  },
  reducers: {
    addDataSort: (state, action) => {
      state.sort = (action.payload);
    },
    addDataOffset: (state, action) => {
      state.offset = (action.payload);
      state.isPagination = true;
    },
    clearDataPagination: (state) => {
      state.isPagination = false;
    },
    updateDataSort: (state, action) => {
      const newDataSort = action.payload;
      const dataSortIdx = state.findIndex((datasort) => datasort.id === newDataSort.id);

      if (dataSortIdx >= 0) {
        state[dataSortIdx] = newDataSort;
      }
    },
  },
});

const { reducer, actions } = datasort;
export const { addDataSort, addDataOffset, updateDataSort, clearDataPagination } = actions;
export default reducer;
