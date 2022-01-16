import { FadeIn } from "../Styles";
import AlertBox from "../AlertBox";
import { githubUsername } from "../../constants";
import { useGetUserRepositories } from "../../services/GitHubService";
import { GitHubIconWrapper, StyledGitHubIcon } from "./styles";
import GitHubRepositories from "../GitHubRepositories";

const Portfolio = () => {
    const { repositories, isLoading, isError } = useGetUserRepositories(githubUsername);

    if (isError) return <AlertBox>Failed to fetch the repositories...</AlertBox>;

    return (
        <FadeIn>
            <GitHubIconWrapper loading={isLoading.toString()}>
                <StyledGitHubIcon />
            </GitHubIconWrapper>
            {!isLoading && <GitHubRepositories repositories={repositories} />}
        </FadeIn>
    );
};

export default Portfolio;
