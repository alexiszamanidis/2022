import SocialIcons from "../SocialIcons";
import { Wrapper, StyledIcon, TabsWrapper, Tab } from "./styles";

const Header = () => {
    return (
        <Wrapper>
            <StyledIcon />
            {/* TODO: tabs(personal, portfolio) + contexts */}
            <TabsWrapper>
                <Tab>Personal</Tab>
                <Tab>Portfolio</Tab>
            </TabsWrapper>
            <SocialIcons />
        </Wrapper>
    );
};

export default Header;
