import SocialIcons from "../SocialIcons";
import { contact, copyrightLink, fullName } from "../../constants";
import {
    Wrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    SocialContainer,
    SocialIconsContainer,
    CopyrightLink,
    CopyrightWrapper,
    Copyright,
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
                <CopyrightWrapper>
                    <Copyright>{`© ${new Date().getFullYear()} Copyright:`}</Copyright>
                    <CopyrightLink href={copyrightLink} target="_blank" rel="noopener">
                        {fullName}
                    </CopyrightLink>
                </CopyrightWrapper>
                <SocialContainer>
                    <SocialIcons />
                </SocialContainer>
            </SocialIconsContainer>
        </Wrapper>
    );
};

export default Footer;
