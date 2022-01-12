import React from "react";
import Layout from "../components/Layout";
import { passionateAbout } from "../constants";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection";
import Timeline from "../components/Timeline";

const Home = () => {
    return (
        <Layout>
            <Header />
            <HeroSection />
            <Timeline />
            {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))}
        </Layout>
    );
};

export default Home;
