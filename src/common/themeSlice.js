import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
    light: lightTheme, 
    dark: darkTheme, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { 
    toggleTheme,
 } = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkMode = state => selectThemeState(state).isDarkMode;

// Zwraca pełny obiekt motywu dla ThemeProvider
export const selectCurrentTheme = (state) => {
  const { isDarkMode, dark, light } = selectThemeState(state);
  return isDarkMode ? dark : light;
};

export default themeSlice.reducer;  

