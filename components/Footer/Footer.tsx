import SocialIcons from "../SocialIcons";
import { contact, fullName } from "../../constants";
import {
    CompanyContainer,
    Wrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./styles";

const Footer = () => {
    return (
        <Wrapper>
            <LinkList>
                {contact.map((contactItem, index) => (
                    <LinkColumn key={index}>
                        <LinkTitle>
                            {contactItem.icon} {contactItem.title}
                        </LinkTitle>
                        <LinkItem href={contactItem.link}>
                            <div>{contactItem.value}</div>
                        </LinkItem>
                    </LinkColumn>
                ))}
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>{`© ${new Date().getFullYear()} Copyright: ${fullName}`}</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons />
                </SocialContainer>
            </SocialIconsContainer>
        </Wrapper>
    );
};

export default Footer;
