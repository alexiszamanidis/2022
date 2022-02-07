import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Personal from "../components/Personal";
import Portfolio from "../components/Portfolio";
import { useTabsContext } from "../contexts/TabsContext";

const a = {foo: "foot"};

a.bar = {};

a.bar = {}

const Home = () => {
    const { activeTab } = useTabsContext();

    return (
        <Layout>
            <Header />
            {activeTab === 1 && <Personal />}
            {activeTab === 2 && <Portfolio />}
        </Layout>
    );
};

export default Home;
