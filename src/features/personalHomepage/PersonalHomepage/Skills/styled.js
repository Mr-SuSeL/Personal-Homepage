import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import BulletIcon from "./bullet.svg?react"; 

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 32px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center; 
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;


export const StyledBullet = styled(BulletIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
  flex-shrink: 0;
  transition: color 0.3s; /* Płynna zmiana koloru przy przełączaniu motywu */

  /* Celujemy we wszystkie elementy wewnątrz SVG (path, circle, rect itp.) */
  & * {
    fill: currentColor !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 6px;
    margin-right: 8px;
  }
`;

export const StyleHeader = styled(SubHeader)`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;