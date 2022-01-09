export interface Contact {
    icon: JSX.Element;
    title: string;
    value: string;
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
