import Theme from "../styles/theme";
import type { AppProps } from "next/app";
import { TabsProvider } from "../contexts/TabsContext";
import { LightDarkModeProvider } from "../contexts/LightDarkModeContext";
import { SWRConfig } from "swr";
import { swrCacheTime } from "../constants";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <SWRConfig
                value={{
                    dedupingInterval: swrCacheTime,
                }}
            >
                <LightDarkModeProvider>
                    <TabsProvider>
                        <Theme>
                            <Component {...pageProps} />
                        </Theme>
                    </TabsProvider>
                </LightDarkModeProvider>
            </SWRConfig>
        </>
    );
};

export default App;
