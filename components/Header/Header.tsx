import { Wrapper, StyledIcon, TabsWrapper, Tab } from "./styles";

const Header = () => {
    return (
        <Wrapper>
            <StyledIcon />
            {/* TODO: tabs(personal, portfolio) + contexts */}
            <TabsWrapper>
                <Tab active>PERSONAL</Tab>
                <Tab>PORTFOLIO</Tab>
            </TabsWrapper>
        </Wrapper>
    );
};

export default Header;
