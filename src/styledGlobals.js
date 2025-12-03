import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

// ✅ Eksport ThemeProvider
export { ThemeProvider };

// ✅ Default export (opcjonalny)
export default StyledGlobals;
