export interface Contact {
    icon: JSX.Element;
    title: string;
    value: string;
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
