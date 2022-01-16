import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 70px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    @media ${(props) => props.theme.breakpoints.sm} {
        gap: 20px;
        width: 100%;
        padding: 70px 10px;
    }
`;
