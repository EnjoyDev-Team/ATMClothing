import { createSlice } from '@reduxjs/toolkit';

const datacategory = createSlice({
  name: 'datacategories',
  initialState: Object,
  reducers: {
    addDataCategory: (state, action) => {
      console.log(action.payload);
      state.slug = (action.payload);
    },
    addDataTitle: (state, action) => {
      state.title = (action.payload);
    },
    updateDataCategory: (state, action) => {
      const newDataCategory = action.payload;
      const dataCategoryIdx = state.findIndex((datacategory) => datacategory.id === newDataCategory.id);

      if (dataCategoryIdx >= 0) {
        state[dataCategoryIdx] = newDataCategory;
      }
    },
  },
});

const { reducer, actions } = datacategory;
export const { addDataCategory, addDataTitle, updateDataCategory } = actions;
export default reducer;
