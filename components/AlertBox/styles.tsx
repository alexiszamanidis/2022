import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px;
    background-color: ${(props) => props.theme.colors.error.main};
    color: ${(props) => props.theme.colors.primary.main};
    width: 95%;
    margin: 70px auto;
    border-radius: 10px;
    font-weight: 600;
`;
