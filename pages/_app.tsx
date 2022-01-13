import Theme from "../styles/theme";
import type { AppProps } from "next/app";
import { TabsProvider } from "../contexts/TabsContext";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <TabsProvider>
                <Theme>
                    <Component {...pageProps} />
                </Theme>
            </TabsProvider>
        </>
    );
};

export default App;
