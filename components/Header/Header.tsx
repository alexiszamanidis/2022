import { assetsPrefix } from "../../constants";
import { useTabsContext } from "../../contexts/TabsContext";
import { Wrapper, TabsWrapper, Tab, Logo } from "./styles";

const Header = () => {
    const { tabs, activeTab, setActiveTab } = useTabsContext();

    const onTabClick = (tabValue: number) => () => {
        setActiveTab(tabValue);
    };

    return (
        <Wrapper>
            <Logo src={`${assetsPrefix}/logo.png`} alt="Alexis Zamanidis Logo" />
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
