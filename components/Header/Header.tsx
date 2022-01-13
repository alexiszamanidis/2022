import { useTabsContext } from "../../contexts/TabsContext";
import { Wrapper, StyledIcon, TabsWrapper, Tab } from "./styles";

const Header = () => {
    const { tabs, activeTab, setActiveTab } = useTabsContext();

    const onTabClick = (tabValue: number) => () => {
        setActiveTab(tabValue);
    };

    return (
        <Wrapper>
            <StyledIcon />
            <TabsWrapper>
                {tabs.map((tab) => {
                    return (
                        <Tab
                            key={tab.id}
                            active={tab.id === activeTab}
                            onClick={onTabClick(tab.id)}
                        >
                            {tab.title}
                        </Tab>
                    );
                })}
            </TabsWrapper>
        </Wrapper>
    );
};

export default Header;
