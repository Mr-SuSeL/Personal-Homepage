import styled from "styled-components";

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      margin-right: 16px;
    }
  }
`;

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: block;
  transition: color 0.3s;

  & svg {
    width: 48px;
    height: auto;
    display: block;
    fill: currentColor;

    & path {
      fill: currentColor;
      transition: fill 0.3s;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      width: 32px;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${IconWrapper} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;