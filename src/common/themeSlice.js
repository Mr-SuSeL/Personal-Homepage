import { createSlice } from "@reduxjs/toolkit";
import { themeLight, themeDark } from "../core/App/theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
    light: themeLight,
    dark: themeDark,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectIsDarkMode = (state) => selectThemeState(state).isDarkMode;

export const selectCurrentTheme = (state) => {
  const { isDarkMode, dark, light } = selectThemeState(state);
  return isDarkMode ? dark : light;
};

export default themeSlice.reducer;
