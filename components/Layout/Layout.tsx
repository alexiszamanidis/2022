import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import { HEAD_TITLE, HEAD_DESCRIPTION, HEAD_KEYWORDS } from "../../constants";

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
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keywords} />
            </Head>
            <div>{children}</div>
            {footer && <Footer />}
        </div>
    );
};

export default Layout;
