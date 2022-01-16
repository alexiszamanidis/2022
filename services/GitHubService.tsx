import useSWR from "swr";
import { GitHubRepository } from "../types";

// const clientId = "";
// const clientSecret = "";
// const oauth = "clientId="+{clientId}+"&clientSecret"+{clientSecret};

const fetcher = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repositories = await response.json();
    // TODO: create an array of keys that we need to destructure from the response
    const formattedRepositories = repositories.map((repo: GitHubRepository) => {
        const { id, name, description, language, stargazers_count, forks_count, html_url } = repo;
        return { id, name, description, language, stargazers_count, forks_count, html_url };
    });
    return formattedRepositories;
};

export const useGetUserRepositories = (username: string) => {
    const { data, error } = useSWR("/github/repos", () => fetcher(username));

    return {
        repositories: data,
        isLoading: !error && !data,
        isError: error,
    };
};
