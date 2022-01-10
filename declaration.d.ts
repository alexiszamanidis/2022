import "styled-components";
import { ColorPalette } from "./types";

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: {
            main: string;
        };
        colors: {
            primary: {
                background: string;
                main: string;
            };
            whites: ColorPalette;
            blacks: ColorPalette;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
