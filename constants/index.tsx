import { Contact } from "../types";
import { HiPhone, HiMail } from "react-icons/hi";

export const contactData: Contact[] = [
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
