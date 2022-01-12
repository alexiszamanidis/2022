import { social } from "../../constants";
import { Wrapper, SocialIcon } from "./styles";

const SocialIcons = () => {
    return (
        <Wrapper>
            {social.map((socialItem, index) => (
                <SocialIcon key={index} target="_blank" rel="noopener" href={socialItem.link}>
                    {socialItem.icon}
                </SocialIcon>
            ))}
        </Wrapper>
    );
};

export default SocialIcons;
