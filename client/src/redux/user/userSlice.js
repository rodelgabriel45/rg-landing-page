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
    deleteMessage(state, action) {
      state.messages = state.messages.filter(
        (message) => message._id !== action.payload
      );
    },
  },
});

export const { setCurrentUser, clearCurrentUser, setMessages, deleteMessage } =
  userSlice.actions;

export default userSlice.reducer;
