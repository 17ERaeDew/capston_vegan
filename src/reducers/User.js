import { createSlice } from '@reduxjs/toolkit';

const user = {
  name: '',
  password: '',
  vegan: 0,
};
const sendUserSlice = createSlice({
  name: 'User',
  initialState: {
    user,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state, action) {
      state.user = user;
    },
  },
});

export const { setUser, clearUser } = sendUserSlice.actions;
export default sendUserSlice.reducer;
