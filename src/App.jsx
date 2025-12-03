import React, { useState } from 'react';
import { StyledGlobals, GlobalContainer, ToggleButton, Title, ThemeProvider } from './styledGlobals';

const lightTheme = {
  colors: {
    background: '#f0f0f0',
    text: '#333',
    primary: '#007bff'
  }
};

const darkTheme = {
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#61dafb'
  }
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>  
      <StyledGlobals />            
      
      <ToggleButton onClick={() => setIsDark(!isDark)}>
        {isDark ? '☀️ Jasny' : '🌙 Ciemny'}
      </ToggleButton>
      
      <GlobalContainer>
        <Title>Welcome to My Personal Homepage</Title>
        <p>Przełącz theme przyciskiem!</p>
      </GlobalContainer>
    </ThemeProvider>
  );
}

export default App;
