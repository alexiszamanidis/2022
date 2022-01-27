import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useLightDarkModeContext } from "../contexts/LightDarkModeContext";
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

interface ThemeProps {
    children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
    const { isDarkMode } = useLightDarkModeContext();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
