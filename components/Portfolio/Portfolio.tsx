import useSWR from "swr";
import { FadeIn } from "../Styles";
import GitHubCard from "../GitHubCard";
import { githubUsername } from "../../constants";
import { GitHubRepository } from "../../types";
import { GitHubRepositories } from "./styles";

const fetcher = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repositories = await response.json();
    // TODO: create an array of keys that we need to destructure from the response
    const formattedRepositories = repositories.map((repo: GitHubRepository) => {
        const { id, name, description, language, stargazers_count, forks_count, html_url } = repo;
        return { id, name, description, language, stargazers_count, forks_count, html_url };
    });
    return formattedRepositories;
};

const Portfolio = () => {
    const { data, error } = useSWR("/github/repos", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <FadeIn>
            <GitHubRepositories>
                {data.map((repo: GitHubRepository, index: number) => {
                    return <GitHubCard key={index} {...repo} />;
                })}
            </GitHubRepositories>
        </FadeIn>
    );
};

export default Portfolio;
