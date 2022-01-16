import { GitHubRepository } from "../../types";
import { Wrapper } from "./styles";

const GitHubCard = ({
    name,
    description,
    language,
    stargazers_count,
    forks_count,
    html_url,
}: GitHubRepository) => {
    return (
        <Wrapper>
            <div>{name}</div>
            <div>{description}</div>
            <div>{language}</div>
            <div>{stargazers_count}</div>
            <div>{forks_count}</div>
            <div>{html_url}</div>
        </Wrapper>
    );
};

export default GitHubCard;
