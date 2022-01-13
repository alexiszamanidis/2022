import SocialIcons from "../SocialIcons";
import { contact } from "../../constants";
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
                    <Slogan>Slogan</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons />
                </SocialContainer>
            </SocialIconsContainer>
        </Wrapper>
    );
};

export default Footer;
