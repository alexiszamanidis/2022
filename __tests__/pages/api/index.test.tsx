import { createMocks } from "node-mocks-http";
import getGitHubRepositories from "../../../pages/api/index";

describe("pages/api/index.tsx", () => {
    test("should return GitHub repositories", async () => {
        const { req, res } = createMocks({
            method: "GET",
        });

        await getGitHubRepositories(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(expect.arrayContaining([]));
    });
});
