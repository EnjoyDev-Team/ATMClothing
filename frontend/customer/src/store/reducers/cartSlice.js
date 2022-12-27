import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { axiosPrivate } from '../../api/axios';

export const addToCart = createAsyncThunk(
  'cart/add',
  async ({ data }) => {
    const res = await toast.promise(
      axiosPrivate.post('/carts', {
        idUser: data.idUser,
        idProduct: data.idProduct,
        size: data.size,
        amount: data.amount
      }),
      {
        pending: 'Thêm vào giỏ hàng...',
        success: 'Thêm vào giỏ hàng thành công!',
        error: 'Thêm thất bại! Vui lòng thử lại!'
      }
    );
    return res.data.data;
  }
);

export const updateCart = createAsyncThunk(
  '/cart/update',
  async ({ data }) => {
    const res = await axiosPrivate.patch(`/carts/${data._id}`, {
      amount: data.amount
    });
    return res.data.data;
  }
);

export const removeFromCart = createAsyncThunk(
  '/cart/remove',
  async ({ _id }) => {
    await axiosPrivate.delete(`/carts/${_id}`);
    return _id;
  }
);

const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    payments: {}
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      if (action.payload) {
        state.cart.push(action.payload);
      }
    },
    [updateCart.fulfilled]: (state, action) => {
      const newItem = action.payload;
      const itemIdx = state.cart.findIndex((item) => item._id === newItem._id);

      if (itemIdx >= 0) {
        state.cart[itemIdx] = newItem;
      }
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    }
  },
  reducers: {
    init: (state, action) => {
      state.cart = action.payload;
    },
    clear: (state, action) => {
      state.cart = [];
      state.payments = {};
    },
    addToPayment: (state, action) => {
      state.payments[action.payload._id] = action.payload.amount;
    },
    removeFromPayment: (state, action) => {
      delete state.payments[action.payload._id];
    },
  },
});

const { reducer, actions } = cart;
export const { init, clear, addToPayment, removeFromPayment } = actions;
export default reducer;
