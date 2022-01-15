export interface Contact {
    icon: JSX.Element;
    title: string;
    value: string;
    link: string;
}

export interface Cv {
    icon: JSX.Element;
    link: string;
}

export interface Social {
    icon: JSX.Element;
    title: string;
    link: string;
}

export interface Education {
    university: string;
    duration: string;
    description: string;
    location: string;
    link: string;
}

export interface Experience {
    from: string;
    to: string;
    jobTitle: string;
    company: string;
    location: string;
    typeOfEmployee: string;
    description: string;
    details: string[];
    link: string | null;
}

export interface GitHubRepository {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

export interface ColorPalette {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
}

export interface GitHubRepository {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}
