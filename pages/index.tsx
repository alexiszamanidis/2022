import React from "react";
import styled from "styled-components";
import { fullName, summary, passionateAbout, cv, social } from "../constants";
import Layout from "../components/Layout";

const Title = styled.div`
    color: red;
    font-size: 15px;
`;

const Home = () => {
    return (
        <Layout>
            <Title>{fullName}</Title>
            <Title>{summary}</Title>
            <div>
                <div>{cv.icon}</div>
                <div>{cv.link}</div>
            </div>
            {social.map((socialItem, index) => (
                <div key={index}>
                    <div>{socialItem.icon}</div>
                    <div>{socialItem.link}</div>
                </div>
            ))}
            {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))}
        </Layout>
    );
};

export default Home;
