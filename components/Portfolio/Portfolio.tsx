import { FadeIn } from "../Styles";
import AlertBox from "../AlertBox";
import GitHubCard from "../GitHubCard";
import { GitHubRepositories } from "./styles";
import { GitHubRepository } from "../../types";
import { githubUsername } from "../../constants";
import { useGetUserRepositories } from "../../services/GitHubService";

const Portfolio = () => {
    const { repositories, isLoading, isError } = useGetUserRepositories(githubUsername);

    if (isError) return <AlertBox>Failed to fetch the repositories...</AlertBox>;
    if (isLoading) return <div>loading...</div>;

    return (
        <FadeIn>
            <GitHubRepositories>
                {repositories.map((repository: GitHubRepository, index: number) => {
                    return <GitHubCard key={index} {...repository} />;
                })}
            </GitHubRepositories>
        </FadeIn>
    );
};

export default Portfolio;
