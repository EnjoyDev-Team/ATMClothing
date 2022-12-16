import { createSlice } from '@reduxjs/toolkit';

const datasort = createSlice({
  name: 'datasorts',
  initialState: Object,
  reducers: {
    addDataSort: (state, action) => {
      state.sort = (action.payload);
    },
    addDataOffset: (state, action) => {
      state.offset = (action.payload);
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
export const { addDataSort, addDataOffset, updateDataSort } = actions;
export default reducer;
