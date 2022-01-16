import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GitHubIconWrapper = styled.div<{ loading: string }>`
    width: 50px;
    height: 50px;
    margin: 70px auto 0px;
    ${({ loading }) =>
        loading === "true" &&
        `
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    `}
`;

export const StyledGitHubIcon = styled(FaGithub)`
    width: 50px;
    height: 50px;
`;
