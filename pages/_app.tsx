import Theme from "../styles/theme";
import type { AppProps } from "next/app";
import { TabsProvider } from "../contexts/TabsContext";
import { LightDarkModeProvider } from "../contexts/LightDarkModeContext";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <LightDarkModeProvider>
                <TabsProvider>
                    <Theme>
                        <Component {...pageProps} />
                    </Theme>
                </TabsProvider>
            </LightDarkModeProvider>
        </>
    );
};

export default App;
