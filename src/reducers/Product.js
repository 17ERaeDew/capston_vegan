import { createSlice } from '@reduxjs/toolkit';

const product = [];
const sendProductSlice = createSlice({
  name: 'Product',
  initialState: {
    product,
  },
  reducers: {
    setProduct(state, action) {
      state.product = [...state.product, action.payload];
    },
    clearProduct(state, action) {
      state.product = [];
    },
  },
});

export const { setProduct, clearProduct } = sendProductSlice.actions;
export default sendProductSlice.reducer;
