import { CgGym } from "react-icons/cg";
import { BsFileTextFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaBasketballBall } from "react-icons/fa";
import { Contact, Education, Experience, Cv, Social, Hobby } from "../types";

export const HEAD_TITLE = "Alexis Zamanidis";
export const HEAD_DESCRIPTION =
    "A Portfolio Web page developed using Next.JS, TypeScript and Styled-Components";
export const HEAD_KEYWORDS =
    "alexis, zamanidis, alexis zamanidis, alexiszamanidis, portfolio, next.js, typescript, styled-components";

export const fullName = "Alexis Zamanidis";
export const location = "Athens, Greece";
export const birthDate = "1998-01-20";
export const githubUsername = "alexiszamanidis";

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
        to: "Present",
        jobTitle: "Software Engineer",
        company: "Upstream",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I have become a member of the Plan Migration team, which is a subgroup of GUI",
        details: [
            "<span class='light-bold'>Developing and Maintaining</span> the websites of TIM and OI, which are Brazil’s <span class='light-bold'>mobile network operators</span>",
            "<span class='light-bold'>Total Overhaul</span> of the TIM website",
            "Implementing <span class='light-bold'>reusable components</span> for the <span class='light-bold'>company’s core component library</span>",
        ],
        link: null,
    },
    {
        from: "Oct 2020",
        to: "Apr 2021",
        jobTitle: "Software Engineer, Intern",
        company: "ITML",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I was given to implement a RESTful Web App that will help Doctors in their daily work",
        details: [
            "<span class='light-bold'>Fully integrated System with IDIKA</span>, which is the <span class='light-bold'>Provider of e-Prescription in Greece</span>",
            "<span class='light-bold'>Automated</span> Visits, Referrals and Prescriptions for their Patients",
            "<span class='light-bold'>Calendar</span> to keep their appointments",
        ],
        link: null,
    },
];

export const hobbies: Hobby[] = [
    {
        title: "Playing Football and Basketball",
        icon: <FaBasketballBall />,
    },
    {
        title: "Calisthenics Workout",
        icon: <CgGym />,
    },
];
