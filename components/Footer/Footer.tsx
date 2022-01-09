import { contact } from "../../constants";

const Footer = () => {
    return (
        <div>
            {contact.map((contactItem, index) => (
                <div key={index}>
                    <div>{contactItem.icon}</div>
                    <div>{contactItem.title}</div>
                    <div>{contactItem.value}</div>
                    <div>{contactItem.link}</div>
                </div>
            ))}
        </div>
    );
};

export default Footer;
