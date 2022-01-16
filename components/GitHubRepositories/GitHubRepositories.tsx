import { GitHubRepository } from "../../types";
import GitHubCard from "../GitHubCard";
import { Wrapper } from "./styles";

interface GitHubRepositoriesProps {
    repositories: GitHubRepository[];
}

const GitHubRepositories = ({ repositories }: GitHubRepositoriesProps) => {
    return (
        <Wrapper>
            {repositories.map((repository: GitHubRepository) => {
                return <GitHubCard key={repository.id} {...repository} />;
            })}
        </Wrapper>
    );
};

export default GitHubRepositories;
