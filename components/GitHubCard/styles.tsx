import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    background-color: ${(props) => props.theme.colors.secondary.background};
    width: 450px;
    word-wrap: break-word;
    border-radius: 40px;

    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: 100%;
    }
`;
