import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.span`
  margin-right: 8px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(4px);
    `}
`;

export const Sun = styled(SunIcon)`
  width: 18px;
  height: 18px;
`;

export const Moon = styled(MoonIcon)`
  width: 18px;
  height: 18px;
`;
