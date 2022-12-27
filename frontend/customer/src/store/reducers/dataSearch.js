import { createSlice } from '@reduxjs/toolkit';

const datasearch = createSlice({
  name: 'datasearch',
  initialState: Object,
  reducers: {
    addDataSearch: (state, action) => {
      state.name = action.payload;
    },

    updateDataSearch: (state, action) => {
      const newDataSearch = action.payload;
      const dataSearchIdx = state.findIndex((datasearch) => datasearch.id === newDataSearch.id);

      if (dataSearchIdx >= 0) {
        state[dataSearchIdx] = dataSearchIdx;
      }
    },
  },
});

const { reducer, actions } = datasearch;
export const { addDataSearch, updateDataSearch } = actions;
export default reducer;
