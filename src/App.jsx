import React, { useState } from 'react';
import { StyledGlobals, GlobalContainer, ToggleButton, Title, ThemeProvider } from './styledGlobals';

const lightTheme = {
  colors: {
    background: '#f0f0f0',
    pageText: '#333333',
    buttonText: '#ffffff',
    buttonBg: '#424447'
  }
};

const darkTheme = {
  colors: {
    background: '#1a1a1a', 
    pageText: '#ffffff',
    buttonText: '#333333',
    buttonBg: '#d6d6d6'
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
