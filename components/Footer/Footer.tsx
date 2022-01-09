import { contactData } from "../../constants";

const Footer = () => {
    return (
        <div>
            {contactData.map((contact, index) => (
                <div key={index}>
                    <div>{contact.icon}</div>
                    <div>{contact.title}</div>
                    <div>{contact.value}</div>
                    <div>{contact.link}</div>
                </div>
            ))}
        </div>
    );
};

export default Footer;
