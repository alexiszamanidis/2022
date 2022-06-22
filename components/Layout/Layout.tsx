import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import { HEAD_TITLE, HEAD_DESCRIPTION, HEAD_KEYWORDS } from "../../constants";
import favicon from "../../public/favicon.ico";

interface LayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    footer?: boolean;
    children?: ReactNode;
}

const Layout = ({
    title = HEAD_TITLE,
    description = HEAD_DESCRIPTION,
    keywords = HEAD_KEYWORDS,
    footer = true,
    children,
}: LayoutProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Alexis Zamanidis" />
                {/* TODO: change this to https://alexiszamanidis.github.io/ */}
                <link rel="canonical" href="https://alexiszamanidis.github.io/2022" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keywords} />
                <meta name="twitter:card" content="summary" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Alexis Zamanidis" />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://avatars.githubusercontent.com/u/48658768?v=4"
                />
                <meta property="og:url" content="https://alexiszamanidis.github.io/2022" />

                <link rel="shortcut icon" href={favicon.src} />
                {/* TODO: uncomment google-site-verification */}
                {/* <meta
                    name="google-site-verification"
                    content="fHkyo6DFEHMvAkHhDLMuFgCqGXccs-g_uB_LetyObyU"
                /> */}
            </Head>
            <div>{children}</div>
            {footer && (
                <div style={{ marginTop: "auto" }}>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Layout;
