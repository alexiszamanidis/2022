import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";
import { fullName, summary, passionateAbout } from "../constants";
import Layout from "../components/Layout";

const Title = styled.div`
    color: red;
    font-size: 15px;
`;

const Home = () => {
    return (
        <Layout>
            <FaGithub />
            <FaLinkedin />
            <BsFileTextFill />
            <Title>{fullName}</Title>
            <Title>{summary}</Title>
            {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))}
        </Layout>
    );
};

export default Home;
