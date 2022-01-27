import { useTabsContext } from "../../contexts/TabsContext";
import { Wrapper, TabsWrapper, Tab, LightDark } from "./styles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useLightDarkModeContext } from "../../contexts/LightDarkModeContext";

const Header = () => {
    const { tabs, activeTab, setActiveTab } = useTabsContext();
    const { isDarkMode, setIsDarkMode } = useLightDarkModeContext();

    const onTabClick = (tabValue: number) => () => {
        setActiveTab(tabValue);
    };

    const onThemeClick = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Wrapper>
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
            <LightDark onClick={onThemeClick}>
                {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </LightDark>
        </Wrapper>
    );
};

export default Header;
