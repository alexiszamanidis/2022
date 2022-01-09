import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    fonts: {
        main: "Space Grotesk, sans-serif",
    },
    colors: {
        primary: {
            background: "#0e1217",
            main: "#fff",
        },
        whites: {
            100: "rgba(255, 255, 255, 0.01)",
            200: "rgba(255, 255, 255, 0.02)",
            300: "rgba(255, 255, 255, 0.03)",
            400: "rgba(255, 255, 255, 0.04)",
            500: "rgba(255, 255, 255, 0.05)",
            600: "rgba(255, 255, 255, 0.06)",
            700: "rgba(255, 255, 255, 0.07)",
            800: "rgba(255, 255, 255, 0.08)",
            900: "rgba(255, 255, 255, 0.09)",
            1000: "rgba(255, 255, 255)",
        },
    },
    breakpoints: {
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 768px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)",
    },
};

export default defaultTheme;
