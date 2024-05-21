import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  messages: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    clearCurrentUser(state) {
      state.currentUser = null;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const { setCurrentUser, clearCurrentUser, setMessages } =
  userSlice.actions;

export default userSlice.reducer;
