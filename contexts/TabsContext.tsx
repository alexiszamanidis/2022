import { useContext, createContext, ReactNode, useState } from "react";

interface TabsContextInterface {
    activeTab: number;
    setActiveTab: (tab: number) => void;
    tabs: Array<{ id: number; title: string }>;
}

const tabContextDefaultValues = {
    activeTab: 0,
    setActiveTab: () => {
        return;
    },
    tabs: [],
};

const TabsContext = createContext<TabsContextInterface>(tabContextDefaultValues);

interface TabsProviderProps {
    children: ReactNode;
}

export const TabsProvider = ({ children }: TabsProviderProps) => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        { id: 1, title: "PERSONAL" },
        { id: 2, title: "PORTFOLIO" },
    ];

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, tabs }}>
            {children}
        </TabsContext.Provider>
    );
};

export const useTabsContext = () => {
    return useContext(TabsContext);
};
