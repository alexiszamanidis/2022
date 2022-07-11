import { GiMuscleUp } from "react-icons/gi";
import { BsFileTextFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaBasketballBall } from "react-icons/fa";
import { Contact, Education, Experience, Cv, Social, Hobby } from "../types";

// 15 minutes
export const swrCacheTime = 1000 * 15 * 60;

export const assetsPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const HEAD_TITLE = "Alexis Zamanidis";
export const HEAD_DESCRIPTION =
    "A Portfolio Web page developed using Next.JS, TypeScript and Styled-Components";
export const HEAD_KEYWORDS =
    "alexis, zamanidis, alexis zamanidis, alexiszamanidis, portfolio, next.js, typescript, styled-components";

export const fullName = "Alexis Zamanidis";
export const location = "Athens, Greece";
export const birthDate = "1998-01-20";
export const githubUsername = "alexiszamanidis";
export const copyrightLink = "https://github.com/alexiszamanidis";

export const summary =
    "I am a Software Engineer with an emphasis on web technologies. I love working with all layers of the stack and I \
    always try to customize the application to the client’s preferences and create user-based applications.";

export const passionateAbout = [
    "Web Development",
    "Machine Learning - Data Mining",
    "Parallel Programming",
];

export const cv: Cv = {
    icon: <BsFileTextFill />,
    link: "https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG",
};

export const social: Social[] = [
    {
        icon: <FaGithub />,
        title: "GitHub",
        link: "https://github.com/alexiszamanidis",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        link: "http://linkedin.com/in/alexiszamanidis",
    },
];

export const contact: Contact[] = [
    {
        icon: <HiPhone />,
        title: "Phone",
        value: "+30 698-044-3908",
        link: "tel:+30698-044-3908",
    },
    {
        icon: <HiMail />,
        title: "Email",
        value: "alexiszamanidis@outlook.com",
        link: "mailto:alexiszamanidis@outlook.com",
    },
];

export const education: Education[] = [
    {
        university: "National & Kapodistrian University of Athens",
        duration: "Oct 2016 - Feb 2021",
        description:
            "B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management.",
        location: "Athens, Greece",
        link: "https://www.di.uoa.gr/",
    },
];

export const experience: Experience[] = [
    {
        from: "Jul 2021",
        to: "Jul 2022",
        jobTitle: "Software Engineer",
        company: "Upstream",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I was responsible for developing and maintaining the Plan Migration, Grow Measure and Track services",
        details: [
            "Investigated the architectural design of Plan Migration using Lerna, yarn workspaces and Monorepos, so that it can be scalable and maintainable as the number of MNOs increases",
            "Participated in the total overhaul of the TIM website",
            "Set up the new Grow Track service",
            "Automate the mock data synchronization process for multiple MNOs",
            "Implemented reusable components for the company’s core component library",
            "Paired programming with an intern and taught him the apps-domains, Git workflow, use of Memcached and Docker",
            "Presented application features to colleagues and recorded them for the future team members",
        ],
        link: "https://www.upstreamsystems.com/",
    },
    {
        from: "Oct 2020",
        to: "Apr 2021",
        jobTitle: "Software Engineer",
        company: "ITML",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I was given to implement a RESTful Web App that will help Doctors in their daily work",
        details: [
            "Fully integrated System with IDIKA, which is the Provider of e-Prescription in Greece",
            "Automated Visits, Referrals and Prescriptions for their Patients",
            "Calendar to keep their appointments",
        ],
        link: "https://itml.gr/",
    },
];

export const hobbies: Hobby[] = [
    {
        title: "Football and Basketball",
        icon: <FaBasketballBall />,
    },
    {
        title: "Calisthenics Workout",
        icon: <GiMuscleUp />,
    },
];
