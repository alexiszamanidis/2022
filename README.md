## ALEXISZAMANIDIS.GITHUB.IO

A minimal Portfolio Web page developed using Next.js, TypeScript and Styled-Components. It is deployed with GitHub pages and uses GitHub REST API to fetch my Personal Data and my Projects.

### Create your own

-   Clone the repository
-   Move into the repository
-   Install the dependencies: `yarn`
-   Run the application locally: `yarn dev`
-   Configure the files listed below to your personal preferences(Of course you can configure any file but these are the most useful ones)
-   Change the `NEXT_PUBLIC_BASE_PATH` env variable to your repository name
-   Push it to your GitHub account
-   Go to your repository on Github -> Settings -> Pages
    -   Select `gh-pages` for your branch
    -   Select `/ (root)` for your root
    -   Click save
-   Check out your website at `[your-github-username].github.io/[your-repository-name]`

### Files

| Path                | Description                           |
| ------------------- | ------------------------------------- |
| public/favicon.ico  | Favicon icon                          |
| constants/index.tsx | Contains the data that are displayed  |
| themes/default.tsx  | Contains the theme colors(light/dark) |
