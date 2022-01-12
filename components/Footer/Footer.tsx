import { contact, social } from "../../constants";
import SocialIcons from "../SocialIcons";

const Footer = () => {
    return (
        <div>
            <div className="contact">
                {contact.map((contactItem, index) => (
                    <div key={index}>
                        <div>{contactItem.icon}</div>
                        <div>{contactItem.title}</div>
                        <div>{contactItem.value}</div>
                        <div>{contactItem.link}</div>
                    </div>
                ))}
            </div>
            <div className="social">
                {social.map((socialItem, index) => (
                    <div key={index}>
                        <div>{socialItem.icon}</div>
                        <div>{socialItem.title}</div>
                        <div>{socialItem.link}</div>
                    </div>
                ))}
            </div>
            <SocialIcons />
        </div>
    );
};

export default Footer;
