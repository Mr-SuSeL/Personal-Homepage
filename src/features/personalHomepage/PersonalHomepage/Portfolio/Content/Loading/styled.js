import styled, { keyframes } from "styled-components";
import { ReactComponent } from "./spinner.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 88px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 32px;
        font-size: 17px;
    }
`;

export const StyledSpinner = styled(Spinner)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.primary};
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 60px;
        margin-top: 32px;
    }
`;
