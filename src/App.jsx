import React from 'react';
import { StyledGlobals, GlobalContainer, ThemeProvider } from './styledGlobals'; // ✅ Poprawna nazwa

const theme = {
  colors: {
    primary: '#007bff',
  }
};

function App() {
  return (
    <>
      <StyledGlobals />
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <h1>Welcome to My Personal Homepage</h1>
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
