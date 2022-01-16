import styled from "styled-components";

export const Wrapper = styled.a`
    padding: 8px 10px;
    width: 250px;
    border-radius: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.blacks[1000]};
    background: ${(props) => props.theme.colors.whites[1000]};
    position: relative;
    z-index: 1;
    height: 38px;

    &:before {
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background-color: ${(props) => props.theme.colors.primary.background};
        z-index: -1;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
        border-radius: 50px;
    }
    &:hover:before {
        transform: scaleX(1);
        border-radius: 50px;
    }
    &:hover {
        color: ${(props) => props.theme.colors.whites[1000]};
        border: 1px solid ${(props) => props.theme.colors.whites[1000]};
        cursor: pointer;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 250px;
        height: 32px;
        font-size: 20px;
        margin-bottom: 0px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        height: 32px;
        font-size: 14px;
        margin-bottom: 0px;
    }
`;
