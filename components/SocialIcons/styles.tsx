import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 50px;
`;

export const SocialIcon = styled.a`
    display: flex;
    align-items: center;
    transition: 0.3s ease;
    color: ${(props) => props.theme.colors.primary.main};
    border-radius: 50%;
    padding: 10px;
    &:hover {
        background-color: ${(props) => props.theme.colors.whites[200]};
        transform: scale(1.2);
        cursor: pointer;
    }
`;
