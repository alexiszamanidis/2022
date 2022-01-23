import styled from "styled-components";
import { SiReact } from "react-icons/si";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 35px auto 0px;
    gap: 10px;

    @media ${(props) => props.theme.breakpoints.lg} {
        max-width: 700px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 80%;
    }
`;

export const StyledIcon = styled(SiReact)`
    font-size: 6rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 4rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 3rem;
    }
`;

export const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const Tab = styled.div<{ active?: boolean }>`
    font-size: 2rem;
    line-height: 32px;
    color: ${(props) =>
        props.active ? props.theme.colors.whites[1000] : props.theme.colors.whites[700]};
    transition: 0.4s ease;
    border-bottom: ${(props) =>
        props.active ? `1px solid ${props.theme.colors.whites[1000]}` : "none"};
    padding-bottom: 1px;
    &:hover {
        color: ${(props) =>
            props.active ? props.theme.colors.secondary.main : props.theme.colors.primary.main};
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 1.5rem;
        line-height: 20px;
    }
`;

export const Logo = styled.img`
    max-width: 80px;
    max-height: 60px;
`;
