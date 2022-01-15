import useSWR from "swr";
import { FadeIn } from "../Styles";
import { githubUsername } from "../../constants";
import { GitHubRepository } from "../../types";

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
    console.log(data);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return <FadeIn>Portfolio</FadeIn>;
};

export default Portfolio;
