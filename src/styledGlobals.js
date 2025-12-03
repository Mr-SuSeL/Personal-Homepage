import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.pageText};
    transition: all 0.3s ease;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.pageText};
  font-size: 3rem;
  margin-bottom: 20px;
`;

export { ThemeProvider };

export default StyledGlobals;
