import Theme from "../styles/theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
};

export default App;
