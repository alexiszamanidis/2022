## ALEXISZAMANIDIS.GITHUB.IO

A minimal Portfolio Web page developed using Next.js, TypeScript and Styled-Components. A well-structured project for use by anyone.

## Benefits

-   Easy to use
-   Easy to setup
-   Configurable
-   Includes everything a big project needs
    -   Husky
    -   Prettier
    -   ESLint
    -   Lint Staged
    -   TypeScript
    -   Testing
    -   CI/CD

### Create your own

-   Clone the repository
-   Move into the repository
-   Install the dependencies: `yarn`
-   Run the application locally: `yarn dev`
-   Configure the files listed below to your personal preferences(Of course you can configure any file but these are the most useful ones)
    -   The `react-icons` package has been installed, so if you want to import a new icon or a different one, you can search [here](https://react-icons.github.io/react-icons/search)
-   Change the `NEXT_PUBLIC_BASE_PATH` env variable to your repository name
    -   The `NEXT_PUBLIC_BASE_PATH` has been defined in the `.github/workflows/deploy.yml` file
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

### Scripts

-   `install`

    This script will install the dependencies and run the application

    I combine this script with the [zsh-git-fzf](https://github.com/alexiszamanidis/zsh-git-fzf) plugin and [git worktrees](https://git-scm.com/docs/git-worktree) to be a more efficient and productive while I am working
