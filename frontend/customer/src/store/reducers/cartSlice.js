import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/axios';

export const addToCart = createAsyncThunk(
  'cart/add',
  async ({ data }) => {
    const res = await axiosPrivate.post('/carts', {
      idUser: data.idUser,
      idProduct: data.idProduct,
      size: data.size,
      quality: data.quality
    });
    return res.data.data;
  }
);

const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
      }
    },
  },
  reducers: {
    init: (state, action) => {
      state.cart = action.payload;
    },
    // removePhoto: (state, action) => state = state.filter((photo) => photo.id != action.payload),

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIdx = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIdx >= 0) {
        state[photoIdx] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = cart;
export const { init, updatePhoto } = actions;
export default reducer;
