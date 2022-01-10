import styled from "styled-components";
import { SiReact } from "react-icons/si";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 10px auto 0px;

    @media ${(props) => props.theme.breakpoints.lg} {
        max-width: 800px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: 300px;
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
