import { FadeIn } from "../Styles";
import AlertBox from "../AlertBox";
import GitHubCard from "../GitHubCard";
import { GitHubRepository } from "../../types";
import { githubUsername } from "../../constants";
import { useGetUserRepositories } from "../../services/GitHubService";
import { GitHubIconWrapper, GitHubRepositories, StyledGitHubIcon } from "./styles";

const Portfolio = () => {
    const { repositories, isLoading, isError } = useGetUserRepositories(githubUsername);

    if (isError) return <AlertBox>Failed to fetch the repositories...</AlertBox>;

    return (
        <FadeIn>
            <GitHubIconWrapper loading={isLoading.toString()}>
                <StyledGitHubIcon />
            </GitHubIconWrapper>
            {!isLoading && (
                <GitHubRepositories>
                    {repositories.map((repository: GitHubRepository, index: number) => {
                        return <GitHubCard key={index} {...repository} />;
                    })}
                </GitHubRepositories>
            )}
        </FadeIn>
    );
};

export default Portfolio;
