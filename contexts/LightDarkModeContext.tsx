import { useContext, createContext, ReactNode, useState, useEffect } from "react";

interface LightDarkModeContextInterface {
    isDarkMode: boolean;
    handleIsDarkModeChange: () => void;
}

const lightDarkModeContextDefaultValues = {
    isDarkMode: true,
    handleIsDarkModeChange: () => {
        return;
    },
};

const LightDarkMode = createContext<LightDarkModeContextInterface>(
    lightDarkModeContextDefaultValues
);

interface LightDarkModeProviderProps {
    children: ReactNode;
}

const themeLocalStorageKey = "theme-mode";

export const LightDarkModeProvider = ({ children }: LightDarkModeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleIsDarkModeChange = () => {
        setIsDarkMode(!isDarkMode);
    };

    // TODO: is there a better way to implement this?
    // TODO: can I initialize the isDarkMode with useState and localStorage?
    useEffect(() => {
        const themeFromLocalStorage = localStorage.getItem(themeLocalStorageKey);
        if (themeFromLocalStorage !== null)
            setIsDarkMode(themeFromLocalStorage.toLowerCase() === "true");
    }, []);

    useEffect(() => {
        localStorage.setItem(themeLocalStorageKey, isDarkMode.toString());
    }, [isDarkMode]);

    return (
        <LightDarkMode.Provider value={{ isDarkMode, handleIsDarkModeChange }}>
            {children}
        </LightDarkMode.Provider>
    );
};

export const useLightDarkModeContext = () => {
    return useContext(LightDarkMode);
};
