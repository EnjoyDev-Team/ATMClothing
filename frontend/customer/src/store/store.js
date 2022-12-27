import { configureStore } from '@reduxjs/toolkit';
// import photoReducer from './reducers/photoSlice';
import dataFilterReducer from './reducers/dataFilter';
import dataSearchReducer from './reducers/dataSearch';
import dataCategoryReducer from './reducers/dataCategory';
import dataSortReducer from './reducers/dataSort';
import cartReducer from './reducers/cartSlice';

const rootReducer = {
  datafilter: dataFilterReducer,
  datasearch: dataSearchReducer,
  datacategory: dataCategoryReducer,
  datasort: dataSortReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
