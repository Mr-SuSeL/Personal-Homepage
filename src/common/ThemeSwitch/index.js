import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, IconWrapper, Sun, Moon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} aria-label="change theme">
        <Text>{isDarkMode ? "☀️ Jasny" : "🌙 Ciemny"}</Text>
        <IconWrapper moveToRight={isDarkMode}>
          {isDarkMode ? <Sun /> : <Moon />}
        </IconWrapper>
      </Button>
    </Wrapper>
  );
};
