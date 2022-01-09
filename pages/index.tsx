import React from "react";
import { passionateAbout } from "../constants";
import Layout from "../components/Layout";
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <Layout>
            <Header />
            {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))}
        </Layout>
    );
};

export default Home;
