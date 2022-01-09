import type { NextApiRequest, NextApiResponse } from "next";
import { GitHubRepository } from "../../types";

const getGitHubRepositories = (_req: NextApiRequest, res: NextApiResponse<GitHubRepository[]>) => {
    res.status(200).json([]);
};

export default getGitHubRepositories;
