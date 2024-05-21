import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    clearTheme(state) {
      state.theme = "dark";
    },
  },
});

export const { toggleTheme, clearTheme } = themeSlice.actions;

export default themeSlice.reducer;
