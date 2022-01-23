import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    fonts: {
        main: "Space Grotesk, sans-serif",
    },
    colors: {
        primary: {
            background: "#0E1217",
            main: "#ffe923",
        },
        secondary: {
            background: "#17191f",
            main: "#d74cf6",
        },
        error: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
        },
        whites: {
            100: "rgba(255, 255, 255, 0.1)",
            200: "rgba(255, 255, 255, 0.2)",
            300: "rgba(255, 255, 255, 0.3)",
            400: "rgba(255, 255, 255, 0.4)",
            500: "rgba(255, 255, 255, 0.5)",
            600: "rgba(255, 255, 255, 0.6)",
            700: "rgba(255, 255, 255, 0.7)",
            800: "rgba(255, 255, 255, 0.8)",
            900: "rgba(255, 255, 255, 0.9)",
            1000: "rgba(255, 255, 255)",
        },
        blacks: {
            100: "rgba(0, 0, 0, 0.1)",
            200: "rgba(0, 0, 0, 0.2)",
            300: "rgba(0, 0, 0, 0.3)",
            400: "rgba(0, 0, 0, 0.4)",
            500: "rgba(0, 0, 0, 0.5)",
            600: "rgba(0, 0, 0, 0.6)",
            700: "rgba(0, 0, 0, 0.7)",
            800: "rgba(0, 0, 0, 0.8)",
            900: "rgba(0, 0, 0, 0.9)",
            1000: "rgba(0, 0, 0)",
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
