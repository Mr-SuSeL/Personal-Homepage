import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { selectIsDarkMode } from "../../common/themeSlice";

export const App = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;