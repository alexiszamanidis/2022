import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const SocialIcon = styled.a`
    display: flex;
    align-items: center;
    transition: 0.3s ease;
    color: ${(props) => props.theme.colors.whites[1000]};
    border-radius: 50%;
    padding: 10px;
    &:hover {
        background-color: ${(props) => props.theme.colors.whites[200]};
        transform: scale(1.2);
        cursor: pointer;
    }
    font-size: 5rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 3rem;
        padding: 6px;
    }
`;
