import { createSlice } from "@reduxjs/toolkit";

const user = {
  name: "",
  vegan: '',
};
const sendUserSlice = createSlice({
  name: "User",
  initialState: {
    user,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  },
});

export const {
  setUser
} = sendUserSlice.actions;
export default sendUserSlice.reducer;
