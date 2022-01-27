import { useContext, createContext, ReactNode, useState } from "react";

interface LightDarkModeContextInterface {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const lightDarkModeContextDefaultValues = {
    isDarkMode: true,
    setIsDarkMode: () => {
        return;
    },
};

const LightDarkMode = createContext<LightDarkModeContextInterface>(
    lightDarkModeContextDefaultValues
);

interface LightDarkModeProviderProps {
    children: ReactNode;
}

export const LightDarkModeProvider = ({ children }: LightDarkModeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <LightDarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </LightDarkMode.Provider>
    );
};

export const useLightDarkModeContext = () => {
    return useContext(LightDarkMode);
};
