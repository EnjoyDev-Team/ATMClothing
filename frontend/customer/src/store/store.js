import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './reducers/photoSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = {
  photos: photoReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
